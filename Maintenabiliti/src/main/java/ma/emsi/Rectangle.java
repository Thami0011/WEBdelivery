package ma.emsi;

public class Rectangle implements IForme{
    private double largeur;
    private double hauteur;
    public Rectangle(double largeur, double hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    public double getLargeur(){
        return largeur;
    }
    public double getHauteur(){
        return hauteur;
    }

    @Override
    public double aire() {
        return hauteur * largeur;
    }
}
