import cityModel from "../../../models/city.model.js";
import connectDB from "../../../middleware/connectDB";
import busModel from "../../../models/bus.model.js";

const HTTP_STATUS = {
  SUCCESS: 200,
  ERROR: 500,
  NOT_FOUND: 404,
};

const CONTENT_TYPE_HEADER = { "Content-Type": "application/json" };

export async function POST(request) {
  try {
    await connectDB();

    const { destination, source } = await request.json();
    const searchTerm = destination || source;

    const cities = await cityModel.find({
      name: { $regex: new RegExp(searchTerm, "i") },
    });

    if (!cities.length) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "No cities found",
        }),
        { status: HTTP_STATUS.NOT_FOUND, headers: CONTENT_TYPE_HEADER }
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
  console.log("hi")
  try {
    await connectDB();

    const { destination, source } = await request.json();

    const [fromCity, toCity] = await cityModel.find({
      name: { $in: [source, destination] },
    });

    if (!fromCity) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Source city not found",
        }),
        { status: HTTP_STATUS.NOT_FOUND, headers: CONTENT_TYPE_HEADER }
      );
    }

    if (!toCity) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Destination city not found",
        }),
        { status: HTTP_STATUS.NOT_FOUND, headers: CONTENT_TYPE_HEADER }
      );
    }

    const buses = await busModel.find({ from: source, to: destination });
    console.log(buses);

    if (buses.length <= 0) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "No buses found for this route",
        }),
        { status: HTTP_STATUS.NOT_FOUND, headers: CONTENT_TYPE_HEADER }
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
