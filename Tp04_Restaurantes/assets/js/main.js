const ruta_json = "../../data/data_resto.json";

async function categorias() {
    try {
        const response = await fetch(ruta_json);
        if(!response.ok){
            throw new Error(`Error al cargar los datos: ${response.statusText}`);
        }

        const datos = await response.json();
        console.log(datos);

    } catch (error) {
        
    }
}

categorias();