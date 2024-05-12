package ma.emsi.backend_webdelivery.service;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;

public class CalculerRoute {

    public static void calculateRoute() {
        String startPoint = "33.577668,-7.643724"; // Remplacez ces valeurs par celles de votre choix
        String endPoint = "33.595623,-7.632245"; // Remplacez ces valeurs par celles de votre choix

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

            // Traitement de la réponse JSON
            JSONArray paths = (JSONArray) jsonResponse.get("paths");
            JSONObject path = (JSONObject) paths.get(0);

            // Extract coded points from response
            String points = (String) path.get("points");

            // Decoding points
            // Vous devrez implémenter la logique de décodage des points codés
            // Ici, je vais simplement afficher les points codés
            System.out.println("Coded Points: " + points);

            // Extract distance and duration information
            double distanceInMeters = (double) path.get("distance");
            double distanceInKilometers = distanceInMeters / 1000.0;


            System.out.println("Distance: " +  distanceInKilometers + " km");


            connection.disconnect();
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
    }
}
