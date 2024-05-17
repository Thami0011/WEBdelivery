package ma.emsi.backend_webdelivery.service;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class CalculerRoute
{
    public static double calculateRoute(String localisation)
    {
        String startPoint = "33.583506,-7.642020"; // Localisation du Restaurant EMSI
        String endPoint = localisation;
        double distanceInKilometers = 9999;

        String graphHopperApiKey = "52c7806e-f342-4f8e-9c95-f7388413c43b";
        String apiUrl = "https://graphhopper.com/api/1/route?";
        apiUrl += "point=" + startPoint;
        apiUrl += "&point=" + endPoint;
        apiUrl += "&vehicle=car";
        apiUrl += "&key=" + graphHopperApiKey;

        try {
            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            JSONParser parser = new JSONParser();
            JSONObject jsonResponse = (JSONObject) parser.parse(new InputStreamReader(connection.getInputStream()));


            JSONArray paths = (JSONArray) jsonResponse.get("paths");
            JSONObject path = (JSONObject) paths.get(0);

            String points = (String) path.get("points");

            double distanceInMeters = (double) path.get("distance");
            distanceInKilometers = distanceInMeters / 1000.0;



            connection.disconnect();

        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }

        return distanceInKilometers;
    }

}
