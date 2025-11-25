export default class Student {
    constructor(jmeno, dny, znamky = []) {
        this.jmeno = jmeno;
        this._dny = dny;       // zapouzdří se
        this.znamky = znamky; // z pole
    }

    // zapouzdření dnů
    get dny() {
        return this._dny;
    }

    set dny(value) {
        if (value < 0) {
            this._dny = 0;
        } else {
            this._dny = value;
        }
    }

    // vrací textový popis objektu
    popis() {
        return `Student ${this.jmeno} má ještě ${this.dny} dnů studia a známky: ${this.znamky.join(", ")}`;
    }

    // přidá známku
    pridejZnamku(znamka) {
        this.znamky.push(znamka);
    }

    // vypočítá průměr známek
    prumer() {
        if (this.znamky.length === 0) return 0;
        const soucet = this.znamky.reduce((a, b) => a + b, 0);
        return soucet / this.znamky.length;
    }
}
