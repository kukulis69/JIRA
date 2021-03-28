let search = document.getElementById("search");

let productName = document.querySelectorAll(".product-details h3");

search.addEventListener("keyup", filterProducts);

function filterProducts(e) {

    let text = e.target.value.toLowerCase();

    productName.forEach(function (product) {

        let item = product.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {

            product.parentElement.parentElement.style.display = "block"

        } else {

            product.parentElement.parentElement.style.display = "none"

        }

    })

}

let btns = document.querySelectorAll('.btn');

let storeProducts = document.querySelectorAll('.store-product');



for (i = 0; i < btns.length; i++) {



    btns[i].addEventListener('click', (e) => {



        let filter = e.target.dataset.filter;

        storeProducts.forEach((product) => {

            if (filter === 'all') {

                product.style.display = 'block'

            } else {

                if (product.classList.contains(filter)) {

                    product.style.display = 'block'

                } else {

                    product.style.display = 'none'

                }

            }

        });

    });

};


