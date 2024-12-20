

//TIME DISPLAY//
document.addEventListener("DOMContentLoaded", function(){
    function updateTime(){
        const timeDisplay = document.getElementById('time-display');
        const time = new Date();
        const formattedTime = time.toLocaleString('en-US', {hour:'numeric', minute:'numeric', weekday:'short'});
    
        timeDisplay.textContent = formattedTime;
    }
    
    
    setInterval(updateTime, 60000);
    
    updateTime();

});


//HOME MENU PANELS OR TOP BAR PANELS//



function toggleMenu(event) {
    const menuParent = event.target.nextElementSibling;
    const allMenus = document.querySelectorAll('.menu-parent');


    allMenus.forEach(menu => {
        if (menu !== menuParent){
            menu.style.display ='none';
        }
    });


    if(menuParent.style.display === 'block'){
        menuParent.style.display = 'none';
    }else{
        menuParent.style.display ='block';
    }
}


const buttons = document.querySelectorAll('#menu-button, #Home-Button, #Shop-Button, #Arkaiv-Button, #Contact-Button');

buttons.forEach(button =>{
    button.addEventListener('click', toggleMenu);
});



document.getElementById("open-finder").addEventListener('click', function(){
    const finder = document.getElementById("arkaiv-wrapper");
    if(finder.style.display === 'none' || !finder.style.display){
        finder.style.display ='block';
    }else{
        finder.style.display = 'block';
    }

    const allMenus = document.querySelectorAll('.menu-parent');
    allMenus.forEach(menu => {
        menu.style.display = 'none';
    })
})


document.getElementById('cntrl-store').addEventListener('click', function (){
    const Store = document.getElementById('shop-wrapper');
    if(Store.style.display === "none" || !Store.style.display){
        Store.style.display ='block';
    }else{
        Store.style.display ='block';
    }

    const allMenus = document.querySelectorAll('.menu-parent');
    allMenus.forEach(menu => {
        menu.style.display = 'none';
    })
});






//title bar template for all apps//

function addTitleBar(appWindow, title) {
    const titleBarTemplate = document.getElementById('title-bar-template');
    const titleBar = titleBarTemplate.content.cloneNode(true);

    titleBar.querySelector('.title-bar-title').textContent = title;

    titleBar.querySelector('#window-close').addEventListener('click', () => {
        appWindow.style.display = 'none';
    });

    titleBar.querySelector('#window-maximize').addEventListener('click', () => {
        if (appWindow.style.width === '100vw' && appWindow.style.height === '100%'){

            appWindow.style.width ='';
            appWindow.style.height = '';
            appWindow.style.left = '';
            appWindow.style.top = '';
        }else{
            appWindow.style.width = '100vw';
            appWindow.style.height = '100%';
            appWindow.style.left = '0';
            appWindow.style.top = '0';
        }
    });

    appWindow.prepend(titleBar);
}


document.addEventListener('DOMContentLoaded', () => {
    const app1 =document.getElementById('main-popup');
    addTitleBar(app1, 'Cntrl');

    const cntrlShop = document.getElementById('shop-wrapper');
    addTitleBar(cntrlShop, 'Cntrl Store')

    const cart = document.getElementById('cart-wrapper');
    addTitleBar(cart, 'Cart')
    
    const arkaiv = document.getElementById('arkaiv-wrapper');
    addTitleBar(arkaiv, 'Arkaiv')


});



//function to change the title-bar control buttons to grey if they are in the back ground//



//Image loading function 

function loadImafe(target, url){
    const imgElement = target.querySelector('img.targer')
    const imgLoaderElement = document.createElement('img')
    const loaderElement = target.querySelector('img.loader')

    imgLoaderElement.onLoad = event => {
        console.log(imgLoaderElement.width, imgLoaderElement.height)

        loaderElement.classList.remove('active')
        imgElement.src = url
    }
}



// function to move the pop up window//

document.addEventListener("DOMContentLoaded", function(){
    const popups = document.querySelectorAll('.application');

    let highestZindex = 100;

    popups.forEach(popup => {
        const buttons = popup.querySelectorAll('.title-bar-control')

        popup.addEventListener('mousedown', function (){
            highestZindex += 1;
            popup.style.zIndex = highestZindex;

            popups.forEach(p => {
                const controls = p.querySelectorAll('.title-bar-control');
                if (p === popup){
                    controls.forEach(button => {
                        button.style.backgroundColor='';
                        button.style.borderColor='';
                    });
                }else{
                    controls.forEach(button => {
                        button.style.backgroundColor ='grey';
                        button.style.border ='grey';
                    });
                }
            })
            
        });

        const titleBar = popup.querySelector('.title-bar-title');
        let offsetX, offsetY;

        titleBar.addEventListener('mousedown', function (e){
            offsetX = e.clientX - popup.getBoundingClientRect().left;
            offsetY = e.clientY - popup.getBoundingClientRect().top;

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
            document.body.style.cursor = 'move';
            titleBar.style.userSelect = 'none';
        });
        
        popup.style.zIndex = "100";

        function onMouseMove(e){
            const rect = popup.getBoundingClientRect();
            const parentRect = popup.parentElement.getBoundingClientRect();
             let left = e.clientX - offsetX;
             let top = e.clientY - offsetY;

             left = Math.max(0, Math.min(parentRect.width - rect.width,left));
             top = Math.max(0, Math.min(parentRect.height - rect.height, top));
             
             popup.style.left = left + "px";
             popup.style.top = top + "px";
        }

        function onMouseUp(){
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            document.body.style.cursor ='';
            titleBar.style.userSelect ='';
        }


    });
});


//app icons to open the window or app //

document.getElementById('cntrl-shop').addEventListener('click', function () {
    const shopPopUp = document.getElementById('shop-wrapper');
    if (shopPopUp.style.display === 'none' || !shopPopUp.style.display){
        shopPopUp.style.display = 'block';

    }
})


document.getElementById('Cart-button').addEventListener('click', function(){
    const cartButton = document.getElementById('cart-wrapper');
    if(cartButton.style.display === 'none' || !cartButton.style.display){
        cartButton.style.display = 'block';
    }

} )

document.getElementById('arkaiv-folder-button').addEventListener('dblclick', function(){
    const arkaivButton= document.getElementById('arkaiv-wrapper');
    if(arkaivButton.style.display === 'none' || !arkaivButton.style.display){
        arkaivButton.style.display = 'block';
    }
})


document.getElementById('finder').addEventListener('click', function(){
    const finderIcon = document.getElementById('arkaiv-wrapper');
    if(finderIcon.style.display === 'none' || !finderIcon.style.display){
        finderIcon.style.display = 'block';
    }
})




//SHOP ITEMS TO OPEN UP


document.addEventListener('DOMContentLoaded',() => {

    const shopMenu = document.querySelector('.shop-menu');
    const originalContent = shopMenu.innerHTML;

    document.querySelectorAll('.shop-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const productId = item.id;
            const productTitle = item.querySelector('h6').innerText;
            const productPrice =item.querySelector('p').innerText;
            const productImage =item.querySelector('img').src;
    
    
            const shopMenu = document.querySelector('.shop-menu');
            shopMenu.innerHTML = '';
    
            shopMenu.innerHTML =`
                
                <div class="shop-item-wrapper">
                    <button class="back-to-shop">
                        Back
                    </button>
                    <div class="shop-item" id="${productId}">
                        <img src="${productImage}" alt="${productTitle}">
                        <h6>${productTitle}</h6>
                        <p>${productPrice}</h6>
                    </div>
                



                </div>

                <div id="form-wrapper">
                    <form class="item-form">
                        <div id="select-size">
                            <label for="size">Size:</label>
                            <select id="size" name="size">
                                <option value="small">Small</option>
                                <option value="small">Medium</option>
                                <option value="small">Large</option>
                                <option value="small">X-Large</option>
                                <option value="small">2X-Large</option>
                            </select>
                        </div>
                        <div id="select-qty">
                            <label for=quantity> Quantity</label>
                            <input type="number">
                        </div>

                        

                        <button id="add-to-cart">
                            Add to cart
                        </button>

                    </form>

                </div>


    
            `;
            
            const backButton = document.querySelector(".back-to-shop");
            backButton.addEventListener('click', () =>{
                shopMenu.innerHTML = originalContent;


                attachItemClickEvents();
            });
    
        });
    });


    function attachItemClickEvents (){

        document.querySelectorAll('.shop-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const productId = item.id;
                const productTitle = item.querySelector('h6').innerText;
                const productPrice =item.querySelector('p').innerText;
                const productImage =item.querySelector('img').src;


                shopMenu.innerHTML =`
                    <div class="shop-item-wrapper">
                        <button class="back-to-shop">
                            Back
                        </button>
                        <div class="shop-item" id="${productId}">
                            <img src="${productImage}" alt="${productTitle}">
                            <h6>${productTitle}</h6>
                            <p>${productPrice}</h6>
                        </div>
                    



                    </div>

                    <div id="form-wrapper">
                        <form class="item-form">
                            <div id="select-size">
                                <label for="size">Size:</label>
                                <select id="size" name="size" required>
                                    <option value="small">Small</option>
                                    <option value="small">Medium</option>
                                    <option value="small">Large</option>
                                    <option value="small">X-Large</option>
                                    <option value="small">2X-Large</option>
                                </select>
                            </div>
                            <div id="select-qty">
                                <label for=quantity> Quantity</label>
                                <input type="number">
                            </div>


                            <button id="add-to-cart">
                                Add to cart
                            </button>

                        </form>

                    </div>
        
                `;

                const backButton = document.querySelector('.back-to-shop');
                    backButton.addEventListener('click', () => {
                        shopMenu.innerHTML = originalContent;
                        attachItemClickEvents();
                    })
            })
        })
    }


})


/* EMPTY CART MESSAGES AND BUTTONS */

document.getElementById('empty-cart-add').addEventListener('click', function(){
    const shopPopUp = document.getElementById('shop-wrapper');
    if(shopPopUp.style.display === 'none' || !shopPopUp.style.display){
        shopPopUp.style.display = 'block';
    }else{
        let highestZindex = 100;

        document.querySelectorAll('*').forEach(element => {
            const zIndex = parseInt(window.getComputedStyle(element).zIndex, 10);
            if (!isNaN(zIndex) && zIndex > highestZindex) {
                highestZindex = zIndex;
            }
        });

        shopPopUp.style.zIndex = highestZindex + 1;

    }

});





//ADD ITEMS TO CART//

document.addEventListener('DOMContentLoaded', function (){
    const shopItem = document.querySelectorAll('.shop-item');
    const cartItemsContainer = document.querySelector('.cart-items');
    const emptyMessage = document.querySelector('.empty-message');

    function addItemsToCart (item) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemImgSrc = item.querySelector('img').src;
        const itemName = item.querySelector('h6').textContent;
        const itemPrice = item.querySelector('p').textContent;

        cartItem.innerHTML = `
        
        <img src="${itemImgSrc}" alt="${itemName}" class="cart-item-img">
        <div class="cart-item-details">
            <h6>${itemName}</h6>
            <p>${itemPrice}</p>
        </div>
        <button class="remove-item">Remove</button>
        
        `;

        cartItem.querySelector('.remove-item').addEventListener('click', function (){
            cartItem.remove();
            checkEmptyCart();
        });

        cartItemsContainer.appendChild(cartItem);

        if(emptyMessage) {
            emptyMessage.style.display= 'none';
        }

    }

    function checkEmptyCart(){
        if(!cartItemsContainer.querySelector('.cart-item')) {
            emptyMessage.style.display = 'block';
        }
    }

    shopItem.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();
            addItemsToCart(item);
        });
    });
});





//FINDER WINDOW//




// Static file data//
const modal = document.createElement('div');
modal.className ='modal';
modal.innerHTML = `
    <div class="modal-content">
            <span class="close">&times;</span>
            <video id="videoPlayer" controls></video>
    </div>`;

document.body.appendChild(modal);
const closeModal = modal.querySelector('.close');

const videoPlayer = modal.querySelector('#videoPlayer');


closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
    videoPlayer.pause(); // Pause video on modal close
    videoPlayer.src = ''; // Clear video source
});



function updateFileDisplay(files) {
    const fileDisplay = document.getElementById('right-display');
    fileDisplay.innerHTML ='';

    const allFilesWrapper = document.createElement('div');
    allFilesWrapper.className ='all-files-wrapper'








    files.forEach(filePath => {
        fetch(filePath)
            .then(response =>{
                if(response.ok){
                    return response.blob();

                }else{
                    throw new Error(`failed to load${filePath}`)
                }
            })
            .then(blob =>{
                const fileName = filePath.split('/').pop();
                const fileSize = `${(blob.size / (1024 * 1024)).toFixed(2)} MB`;


                    const fileIcon = document.createElement('div');
                    fileIcon.className =`file-info`;

                    const fileExtension = filePath.split('.').pop().toLowerCase();
                    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].includes(fileExtension)){

                        fileIcon.innerHTML=`
                        <div class="file-icon">
                            <img src ="${filePath}" alt="${fileName}">
                            <div class="file-NS">
                                <p class="file-name">${fileName}</p>
                                <p class="file-size">${fileSize}</p>
                            </div>
                        </div>
                    `;
                    }else if(['mp4', 'avi', 'mkv', 'mov', 'flv', 'webm', 'mpeg'].includes(fileExtension)){
                        fileIcon.innerHTML = `
                        <div class="file-icon" id="video-tns">
                            <video playsinline muted">
                                <source src="${filePath}" type="video/${fileExtension}">
                                Your browser does not support the video tag.
                            </video>
                            <div class="file-NS">
                                <p class="file-name">${fileName}</p>
                                <p class="file-size">${fileSize}</p>
                            </div>
                        </div>
                    `;
                    fileIcon.querySelector('video').addEventListener('click', function () {
                        videoPlayer.src = filePath; // Set the clicked video as the source
                        modal.style.display = 'flex'; // Show the modal
                        videoPlayer.play(); // Auto-play the video
                    });
                    }else{
                        console.warn(`Unsupported file type: ${fileExtension}`);
                        fileIcon.innerHTML = `
                            <div class="file-icon">
                                <p>Unsupported file type: ${fileExtension}</p>
                            </div>
                        `;
                    }


                    allFilesWrapper.appendChild(fileIcon);
            })
            .catch(error => console.error(error));
    });
    fileDisplay.appendChild(allFilesWrapper);
}

const cntrl24 = ['Cntrl 24/cargo+back+.png','Cntrl 24/atlanta.png', 'Cntrl 24/hvn-full.png', 'Cntrl 24/pants.png','Cntrl 24/benz-.png']
const cntrl23 = ['Cntrl 23/juventus.png', 'Cntrl 23/juve0.png','Cntrl 23/grey fron t.png','Cntrl 23/back of jacket .png','Cntrl 23/back.png','Cntrl 23/pac.png'];
const videos = ['Videos/00191.mp4'];



document.getElementById('cntrl-24').addEventListener('click', function(){
    updateFileDisplay(cntrl24);
});


document.getElementById('cntrl23').addEventListener('click', function(){
    updateFileDisplay(cntrl23);
});


document.getElementById('Videos').addEventListener('click', function(){
    updateFileDisplay(videos);
});

//TRIGGER THE VIDEO THUMBNAIL TO OPEN ON A NEW WINDOW//






//FILE ICONS OPEN THE DISPLAY IMAGE WINDOW)//
