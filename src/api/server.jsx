const token = 'bef5cbdf21a26b9e36697f2865c16585c489b050faca4b25'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://separate-furtive-plastic.glitch.me/api/cars`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        });

        if (!response.ok){
            throw new Error("Failed to fetch data from the server")
        }

        return await response.json()
    },

    create: async (data = any = {}) => {
        const response = await fetch(`https://separate-furtive-plastic.glitch.me/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id, data) => {
        const response = await fetch(`https://separate-furtive-plastic.glitch.me/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id, data) => {
        const response = await fetch(`https://separate-furtive-plastic.glitch.me/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}