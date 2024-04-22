package ma.emsi;

public class Cercle implements IForme {
    private double rayon;
    public Cercle(double rayon) {
        this.rayon = rayon;
    }
    public double getRayon() {
        return rayon;
    }

    @Override
    public double aire() {
        return rayon * rayon * Math.PI;
    }
}
