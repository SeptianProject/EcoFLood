import { formatDataApi } from "@/helper/format-data-api";
import { fetchFloodApi } from "@/lib/fetch-flood-api";
import { fetchWeatherApi } from "@/lib/fetch-weather-api"
import { logicFloodPrediction } from "@/lib/logic-flood-prediction";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const lat = searchParams.get('latitude') || '';
    const lng = searchParams.get('longitude') || '';

    if(!lat || !lng) {
        return NextResponse.json({
            lat: lat,
            lng: lng,
            error: "Missing latitude or longitude in query parameters."
        }, { status: 400 });
    } 

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    const dataOpenMeteoApi = await fetchWeatherApi(latitude, longitude);
    
    const dataFloodApi = await fetchFloodApi(latitude, longitude);

    const formatData = await formatDataApi(dataOpenMeteoApi, dataFloodApi);

    const floodPrediction = await logicFloodPrediction(formatData);

    return NextResponse.json({
        floodPrediction: floodPrediction,
        lat: lat,
        lng: lng
    });
}