const url = 'https://graph.instagram.com/me'
const ACCESS_TOKEN = 'IGQVJWemlYQ09LeE1yLXFaYmkybVdCYkNLU1JsdDZAaY2h1R1JqVmxFZADZA1VzRxUjVrQUpyZAjZAXc0k4OVNIV0lWZAEZAWRFl6TEZAxVlRINUhaVGRnV1pTc1RqSlgzOVA4YkZAuSTl1Q1J6SlU2NUJocEw1aGx4Sm1paGNDdEJF'

export const getUserInfo = async () => {
    const API = `${url}?fields=username,media_count&access_token=${ACCESS_TOKEN}`
    const data = await fetch(API).then(res => res.json())
    return data
}

export const getUserMedia = async () => {
    const API = `${url}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`
    const data = await fetch(API).then(res => res.json())
    const userMedia = data.map(content => {
        const { media_url } = content
        return media_url
    })

    return userMedia
}
