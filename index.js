const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express()  .use(cors());

app.use(express.json());


let link = 'https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/';

let encryptedSummonerId = ["Bw4XoHRci0E5zA0m5nfrMW0RKK9PrVC00bTlO0HtTmZDMw","01ufXs9qRs9l_3hhzGP1QUiSK8LzTyItId_jy292dn7C-ec","xltVWl95tN56uNWGV7pefvEpvWOvUHd45RTBJ1L0PYV_FQw",
                           "j2QyirR5FkSRajKr1S3orXrWVWD8mN5gIAkXBIe6ZD2w5SM","YAmFLWG6zEdRDaSf39sBgaB2B7nDvWM8nbofhldLqNn_5Uc","2WAuGEuUw7v3bw7wg3AY7oG3CYR2dgxCgPEnFCGzvih-",
                           "nBzszuk_UVeDj3ajSHrte1QBkBjzipIHTIy-0BhWrzill6k","QaH7j7WSiwg7k6YggZevuMpacZfbAcv0YFD9MR0VZPFrBQ4","TdMpujh4mXj0AESJgBIGzVkAhHxrWTpV7iXcSxjlT1Or_ks",
                           "DRhY7UexvsMts1uw0WP-mnYygwAsrnSeIO9VJL8Bgq8X4Q","wzI_UzrR0DKElMya32jpqj6oM-yUelFQSLguSDrN_Fc2zw","WjJlfJYurrMi6ywsbj3jY7jLtXrF5Iln2zskruruTVN9fQ",
                           "yEBNdfPxMwwZPXeNg5mqsIkgTfWx-k0xLV_4et7oWelC", "moq8AsV-CBUfSnRMxsX8CDMLgjt6L1ls9u2Yz0mliwHYYg","g7IY-HigfDl36Q2PP7wvrJIjgVvk1cORWJs0Xkc60jk",
                           "uWPTNctLh0tKobLZMjEmU4buX_3b4nZbTmsVK_bXU4aR_g","VUryguoheC6lKiT9YxqNtjpVoM2ByK28FJk1j6ImaTt_g9Npvc3BVrr5Fw"];

let opgg = ['https://las.op.gg/summoners/las/Ewäh%20V1','https://las.op.gg/summoners/las/Hisoka%20Shy','https://las.op.gg/summoners/las/Sophie%20Racoon',
            'https://las.op.gg/summoners/las/Dev%20Hyre','https://las.op.gg/summoners/las/Ing%20Blasther','https://las.op.gg/summoners/las/Mg%20Kalharnos',
            'https://las.op.gg/summoners/las/fireminer','https://las.op.gg/summoners/las/Nachoide','https://las.op.gg/summoners/las/BTP%20Isanm',
            'https://las.op.gg/summoners/las/Sulpy','https://las.op.gg/summoners/las/Muufiz','https://las.op.gg/summoners/las/Bulkuro',
            'https://las.op.gg/summoners/las/Kurumi%20lover','https://las.op.gg/summoners/las/Mysthus','https://las.op.gg/summoners/las/Poliwrath',
            'https://las.op.gg/summoners/las/Mrs%20Chocolat','https://las.op.gg/summoners/las/Zergnefot']

let twitter = ['https://twitter.com/Ewah_Tumblr','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home',
               'https://twitter.com/home','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home','https://twitter.com/home',
               'https://twitter.com/home','https://twitter.com/home',]

let twitch = ['https://www.twitch.tv/ewah_tumblr','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv',
              'https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv','https://www.twitch.tv']

let summonerName = ['Ewäh V1','Hisoka Shy', 'Sophie Racoon','Dev Hyre','Ing Blasther','Mg Kalharnos','fireminer','Nachoide','BTP Isanm','Sulpy','Muufiz','Bulkuro','Kurumi Lover','Mysthus','Poliwrath','Mrs Chocolat','Zergnefot']

let jugadores= [];
    



setInterval(
    ()=> llamada(),60000
);

const llamada = () =>{
    console.log("Actualizando...")
    var key = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var api_key = atob(key);
    jugadores = [];
    for (let i = 0; i < encryptedSummonerId.length; i++) {
        request({
            url:link + encryptedSummonerId[i] + "?api_key=" + api_key,
            json:true
        },(error,response,body)=>{
            if (body[0] !=undefined) {
                if (body[0].queueType == "RANKED_SOLO_5x5") {
                    body[0].summonerId = opgg[i]
                    body[0].hotStreak = twitch[i]
                    body[0].veteran = twitter[i]
                    jugadores.push(body[0])
                
                } else if (body[1] !=undefined) {
                    if (body[1].queueType == "RANKED_SOLO_5x5") {
                        body[1].summonerId = opgg[i]
                        body[1].hotStreak = twitch[i]
                        body[1].veteran = twitter[i]
                        jugadores.push(body[1])
                    }else if(body[2] !=undefined){
                        if (body[2].queueType == "RANKED_SOLO_5x5") {
                            body[2].summonerId = opgg[i]
                            body[2].hotStreak = twitch[i]
                            body[2].veteran = twitter[i]
                            jugadores.push(body[2])
                        }
                    }
                } 
                } else{
                    let comun = {"queueType":"RANKED_SOLO_5x5","tier":"UNRANKED","rank":"","summonerName":summonerName[i],"leaguePoints":"","wins":"","losses":"","summonerId":opgg[i],"veteran":twitter[i],"hotStreak":twitch[i] }
                    body[i] = comun
                    jugadores.push(body[i])
            }
        })   
        
    }
    
}

app.get('/jugadores',(req,res) =>{
    res.send(jugadores);
});

const PORT = 3000
app.listen(PORT, () => {
    console.log(`El servidor está levantado en el puerto ${PORT}`) 
})