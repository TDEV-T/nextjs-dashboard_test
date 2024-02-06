
export async function GET() {
    try {
        const resp = await fetch(`${process.env.BASEAPI_HTTP}admin/users`, {
            headers: {
                'Content-Type': 'application/json',
                'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDc0NTMxOTIsInVzZXJfaWQiOjQsInVzZXJfbmFtZSI6InRkZXYiLCJ1c2VyX3JvbGUiOiJhZG1pbiJ9.cVnAQk9bZ4Liq0A9uHb-3V0vyQeg-kKjhsmuZNR3FfA'
            }
        })


        if (!resp.ok) {
            throw new Error(`HTTP Error status ${resp.status}`)
        }

        const userList = await resp.json();

        return Response.json(userList)
    } catch (e) {
        console.log('Error Get Data : ', e)
        return null;
    }
}
