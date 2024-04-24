package ma.emsi;


import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Cercle c = new Cercle(2.0);
        Rectangle r = new Rectangle(2.0, 4.0);
        List<IForme> myArrayList = new ArrayList<IForme>();
        myArrayList.add(c);
        myArrayList.add(r);
        System.out.println("Totale des surfaces du cercle et du rectangle : "
        + CalculatriceAire.aire(myArrayList));
    }
}
