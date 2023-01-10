chrome.runtime.onMessage.addListener(function(obj, sender, response) {
    block = obj.block
    if (block) {
        if (document.body.innerHTML != 
                `<div class="message">
                    <h1 class="L">STOP!!!</h1>
                    <p class="M">You're not being productive.</p>
                    <p class="XL">>:(</p>
                </div>`) {
            document.head.innerHTML =  
                `<meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                html, body {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    background-color: red;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    align-items: center;
                    justify-content: center;
                }
                
                .message{
                    width: fit-content;
                    height: fit-content;
                }
                
                .L {
                    font-weight: 900;
                    color: #ffffff;
                    font-size: 72px;
                }
                
                .M, .XL {
                    font-weight: 500;
                    color: #d1d1d1;
                    font-size: 62px;
                }
                
                .L, .M, .XL {
                    margin: 0;
                    width: fit-content;
                    height: fit-content;
                }
                </style>`;
            document.body.innerHTML =  
                `<div class="message">
                    <h1 class="L">STOP!!!</h1>
                    <p class="M">You're not being productive.</p>
                    <p class="XL">>:(</p>
                    <p class="urloasfdojiwoqjpqjewiof32pjiop2ji1oqpwejiodpqjewpodiqjwioepdjiofp">You really need to get off ${location.href}</p>
                </div>`;
        }
    } else if (document.querySelector(".urloasfdojiwoqjpqjewiof32pjiop2ji1oqpwejiodpqjewpodiqjwioepdjiofp") != null && document.querySelector(".urloasfdojiwoqjpqjewiof32pjiop2ji1oqpwejiodpqjewpodiqjwioepdjiofp") != "undefined") {
        location.reload();
    }
});


