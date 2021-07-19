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
    image: string,
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
    public static createContainer(buttonContainer: ButtonContainer): HTMLElement
    {
        const productContainer = createElement(`<div id="${buttonContainer.type}-${buttonContainer.id}" class="carousel slide rounded my-5" data-bs-touch="false" data-bs-interval="false">`) as HTMLElement;
        buttonContainer.$container.appendChild(productContainer);

        buttonContainer.$designContainer = createElement(`<div class="carousel-inner">`) as HTMLElement;
        productContainer.appendChild(buttonContainer.$designContainer);

        return buttonContainer.$designContainer;
    }

    public static createProduct(product: Product, type: string, id: number): ChoiceDesignElements
    {
        const container = createElement(`<div class="carousel-item active" style="background-color: #6639b7; color: white; border-radius: 5px;">`) as HTMLElement;
        
        const skipperContainer = createElement(`<div class="row mx-5 my-5">`) as HTMLElement;

        const prev = createElement(`
        <div class="col" type="button" data-bs-target="${type}-${id}" data-bs-slide="prev">
            <div class="carousel-control-prev-icon mx-auto d-block" aria-hidden="true"></div>
        </div>`) as HTMLElement;

        const title = createElement(`<div class="col d-block fs-1 text-center">${product.title}</div>`) as HTMLElement;

        const next = createElement(`
        <div class="col" type="button" data-bs-target="${type}-${id}" data-bs-slide="next">
            <div class="carousel-control-next-icon mx-auto d-block" aria-hidden="true"></div>
        </div>`) as HTMLElement;

        skipperContainer.appendChild(prev);
        skipperContainer.appendChild(title);
        skipperContainer.appendChild(next);

        container.appendChild(skipperContainer);

        const products = createElement(`<div class="row mx-5 my-5">`) as HTMLElement;
        
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
        }

        const image = createElement(`
        <div class="col-lg-4 col-sm-12">
            <img class="img-thumbnail mx-auto d-block" style="width: 15rem; height: 15rem; border-radius: 15rem !important; border-color: #ffffff4f !important; background-color: #ffffff4f;" src="${product.image}" alt="">
        </div>
        `) as HTMLElement;

        //TODO : infos & techsheet

        products.appendChild(image);
        container.appendChild(products);

        return {
            container,
            next,
            prev,
        };
    }
}