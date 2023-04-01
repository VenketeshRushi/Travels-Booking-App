import connectDB from "../../../middleware/connectDB";
import City from "../../../models/city.model";
import Bus from "../../../models/bus.model";

const HTTP_STATUS = {
  SUCCESS: 200,
  ERROR: 500,
};

const CONTENT_TYPE_HEADER = { "Content-Type": "application/json" };

export async function POST(request) {
  try {
    await connectDB();

    const requestData = await request.json();
    const q = requestData.destination || requestData.source;

    const cities = await City.find({ name: { $regex: new RegExp(q, "i") } });

    if (!cities.length) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "No cities found",
        }),
        { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
      );
    }

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Cities found successfully",
        cities: cities,
      }),
      { status: HTTP_STATUS.SUCCESS, headers: CONTENT_TYPE_HEADER }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        status: "error",
        message: "An error occurred while processing the request",
      }),
      { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
    );
  }
}

export async function PUT(request) {
  await connectDB();
  try {
    const { destination, source } = await request.json();

    const [fromCity, toCity] = await City.find({
      name: { $in: [source, destination] },
    });
    console.log(fromCity, toCity);
    if (!fromCity) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Source city not found",
        }),
        { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
      );
    }
    if (!toCity) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Destination city not found",
        }),
        { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
      );
    }

    const buses = await Bus.find({ from: source, to: destination });
    if (!buses.length) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "No buses found for this route",
        }),
        { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
      );
    }

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Buses found successfully",
        buses: buses,
      }),
      { status: HTTP_STATUS.SUCCESS, headers: CONTENT_TYPE_HEADER }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        status: "error",
        message: "An error occurred while processing the request",
      }),
      { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
    );
  }
}
