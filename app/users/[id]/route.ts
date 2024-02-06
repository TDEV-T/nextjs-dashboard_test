export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const resp = await fetch(`${process.env.BASEAPI_HTTP}admin/users/${params.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDc0NTMxOTIsInVzZXJfaWQiOjQsInVzZXJfbmFtZSI6InRkZXYiLCJ1c2VyX3JvbGUiOiJhZG1pbiJ9.cVnAQk9bZ4Liq0A9uHb-3V0vyQeg-kKjhsmuZNR3FfA'
            }
        })

        if (!resp.ok){
            throw new Error (`HTTP Error Status ${resp.status}`)
        }

        const userData = await resp.json()

        return Response.json(userData)
    }catch(e){
        console.log("Error Get Data :", e)
        return null;
    }

}