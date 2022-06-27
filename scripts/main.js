    var temp1 = 1
    var temp2 = 0
    var temp3 = 0
    var myButton = document.querySelector('button');
    var myHeading = document.querySelector('h1');
    async function getprice()
    {

        let resp1 = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
        let resp2 = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=near&vs_currencies=usd")
        let resp3 = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")

        let f = document.getElementById('sol')
        let s = document.getElementById('near')
        let t = document.getElementById('btc')

        if(resp3.ok)
        {
            let json1 = await resp1.json()
            let json2 = await resp2.json()
            let json3 = await resp3.json()
            f.innerHTML = 'price SOL: ' + json1["solana"]["usd"] + '  '
            s.innerHTML = 'price near: ' + json2["near"]["usd"]
            t.innerHTML = 'price bitcoin: ' + json3["bitcoin"]["usd"]
        }
        else
        {
            f.innerHTML = 'RATE LIMITED'
            s.innerHTML = 'RATE LIMITED'
            t.innerHTML = 'RATE LIMITED'
            console.log('GG')
        }

    }



    myButton.onclick = function()
    {
        myButton.remove()
        const inter = setInterval(getprice,3444)
        getprice()

    }
