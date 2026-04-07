
export function verificarSeguridad() {
    const passInput = document.getElementById("password");
    const longitud = passInput.value.length;
 
    if (longitud === 0) return "";

   
    if (longitud >= 6) {
        return "Seguridad: Fuerte";
    } else {
        return "Seguridad: Débil";
    }
}