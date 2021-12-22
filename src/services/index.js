const url = 'https://graph.instagram.com/me'
const ACCESS_TOKEN = 'IGQVJWekhvUzI1YU9FLThnWGpsQUg3R19YaDRpOGxzUzFXZAzd4VHJvM3VCR18yT1c4OVFBdVJUME9ZANFdlOEpiaTVkS2pzWVMyMTRxOTBiS19xR19sOXBPYjIxbzN0NEpfQU9rd0NPUGVYemVtMnFXbkUzX2xGU29xbWNN'

export const getUserInfo = async () => {
    const API = `${url}?fields=username,media_count&access_token=${ACCESS_TOKEN}`
    const data = await fetch(API).then(res => res.json())
    return data
}

export const getUserMedia = async () => {
    const API = `${url}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`
    const { data } = await fetch(API).then(res => res.json())


    return data
}
