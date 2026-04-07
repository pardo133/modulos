
export function Saludo(nombre, idioma) {
    const traducciones = {
        es: "Hola, " + nombre ,
        en: "Hello, " + nombre ,
        fr: "Bonjour, " + nombre 
    };

    return traducciones[idioma] || "Hola, " + nombre;
}

