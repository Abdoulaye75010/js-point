// Vous mettrez ici le code de la classe Point
class Point {

    #abscisse;
    #ordonnee; 

    constructor(abscisse, ordonnee)
    {
        this.#abscisse = abscisse;
        this.#ordonnee = ordonnee;
    }

    get abscisse() 
    {
        return this.#abscisse;
    }
    set abscisse(x) 
    {
        this.#abscisse = abscisse
    }

    get ordonnee() 
    {
        return this.#ordonnee;
    }
    set ordonnee(y)
    {
        this.#ordonnee = ordonnee
    }
  
}