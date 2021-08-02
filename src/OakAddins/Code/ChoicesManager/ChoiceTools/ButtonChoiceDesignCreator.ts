import { Debug } from "../../../../lib/Tools/Debug";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { EventEmitter } from "../../../../lib/Tools/EventEmitter";
import { OakAddinsConfigurateur } from "../../OakAddinsConfigurateur";
import { ButtonContainer } from "../Choices/ButtonContainer";

export type ProductLineValue = string | string[];

export type ProductLine = {
    title: string,
    values: ProductLineValue[]
};

export type Product = {
    title: string,
    image?: string,
    techsheet?: string,
    infos?: string,
    cat: ProductLine[]
};

export type ChoiceDesignElements = {
    container: HTMLElement,
    next: HTMLElement,
    prev: HTMLElement,
}

export type ButtonChoiceDesignCreatorOptions = {
    configurator: OakAddinsConfigurateur,
};

export class ButtonChoiceDesignCreator extends EventEmitter 
{
    public static createContainer(buttonContainer: ButtonContainer): { globalContainer: HTMLElement, container: HTMLElement }
    {
        const globalProductsContainer = createElement(`<div id="${buttonContainer.type}-${buttonContainer.id}" class="product-design-contrainer carousel slide rounded my-5" data-bs-touch="false" data-bs-interval="false">`) as HTMLElement;
        
        const productsContainer = createElement(`<div class="carousel-inner">`) as HTMLElement;
        globalProductsContainer.appendChild(productsContainer);
        
        return {
            globalContainer: globalProductsContainer,
            container: productsContainer
        };
    }

    public static createProduct(product: Product, type: string, id: number, active?: boolean): ChoiceDesignElements
    {
        Debug.info('Create Product design with args', product, type, id);

        const container = createElement(`<div class="carousel-item ${active ? 'active' : ''}" style="background-color: #6639b7; color: white; border-radius: 5px;">`) as HTMLElement;
        
        const skipperContainer = createElement(`<div class="row mx-5 my-5">`) as HTMLElement;

        const prev = createElement(`
        <div class="col-2" type="button" data-bs-target="#${type}-${id}" data-bs-slide="prev">
            <div class="carousel-control-prev-icon mx-auto d-block" aria-hidden="true"></div>
        </div>`) as HTMLElement;

        const title = createElement(`<div class="col d-block fs-1 text-center">${product.title}</div>`) as HTMLElement;

        const next = createElement(`
        <div class="col-2" type="button" data-bs-target="#${type}-${id}" data-bs-slide="next">
            <div class="carousel-control-next-icon mx-auto d-block" aria-hidden="true"></div>
        </div>`) as HTMLElement;

        skipperContainer.appendChild(prev);
        skipperContainer.appendChild(title);
        skipperContainer.appendChild(next);

        container.appendChild(skipperContainer);

        const products = createElement(`<div class="row mx-5 my-5">`) as HTMLElement;
        const categoriesContainer = createElement(`<div class="col-lg-8 col-sm-12">`) as HTMLElement;
        
        for(const category of product.cat)
        {
            const categoryContainer = createElement(`<div class="row">`) as HTMLElement;

            const categoryTitle = createElement(`
            <div class="col-lg-3 col-sm-12">
                ${category.title}
            </div>`) as HTMLElement;

            let catLinesContainer = `<div class="col-lg-9 col-sm-12">`;

            for(const catLine of category.values)
            {
                switch(typeof catLine)
                {
                    case 'string': catLinesContainer += `<p>${catLine}</p>`; break;
                    case 'object': 

                        let subLine = `<ul>`;

                        for(const catSubLine of catLine)
                        {
                            subLine += `<li><p>${catSubLine}</p></li>`;
                        }

                        subLine += `</ul>`;
                        catLinesContainer += subLine;

                    break;
                }
            }

            categoryContainer.appendChild(categoryTitle);
            categoryContainer.innerHTML += catLinesContainer;
            categoriesContainer.appendChild(categoryContainer);
        }

        /*
        const heat = `
        <div class="heat-img-container float-right" style="display: flex">
            <img class="float-end categorie-img" src="images/Products/macaron_chauffes_FR.jpg" style="border-radius: 7rem !important; width: 7rem; height: 7rem;">
            <img class="hidden-img" src="images/Products/thermo.png" hidden>
        <div>
        `;

        categoriesContainer.innerHTML += heat;*/

        if(product.infos)
        {
            categoriesContainer.innerHTML += `<a type="button" class="btn btn-light me-2 my-2" href="${product.infos}" target="_blank">${"Fiche produit"}</a>`;
        }

        products.appendChild(categoriesContainer);
        
        if(product.image)
        {
            const image = createElement(`
            <div class="col-lg-4 col-sm-12">
                <img class="img-thumbnail mx-auto d-block" style="width: 15rem; height: 15rem; border-radius: 15rem !important; border-color: #ffffff4f !important; background-color: #ffffff4f;" src="${product.image}" alt="">
            </div>
            `) as HTMLElement;
    
            products.appendChild(image);
        }

        container.appendChild(products);

        return {
            container,
            next,
            prev
        };
    }

    public static applyHoverEvents()
    {
        const images = document.querySelectorAll('.heat-img-container') as NodeListOf<HTMLElement>;

        images.forEach((imageContainer) => 
        {
            const image = imageContainer.querySelector('.categorie-img') as HTMLElement;
            const hidden = imageContainer.querySelector('.hidden-img') as HTMLElement;

            image.addEventListener('mouseenter', () => { image.setAttribute('hovering', 'true'); hidden.hidden = false});
            image.addEventListener('mouseleave', () => { image.setAttribute('hovering', 'false'); hidden.hidden = true});

            image.addEventListener('mousemove', (event) => 
            {
                if(image.getAttribute('hovering') == 'true')
                {
                    hidden.setAttribute('style', `left: ${event.pageX}; top:${event.pageY}`);
                }
            });
        });
    }
}