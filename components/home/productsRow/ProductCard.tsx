import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { Dispatch, SetStateAction } from "react";

/* eslint-disable @next/next/no-img-element */

export interface IWork {
  id: number;
  title: string;
  imgSrc: string;
}

interface IWorkCard {
  objWork: IWork;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedProduct: Dispatch<SetStateAction<IWork | null>>;
}

export default function ProductCard(props: IWorkCard) {
  return (
    <Card className="w-full bg-white border border-gray-200 !p-0">
      <div className="grid grid-rows-[1fr_auto]">
        <div className="h-auto overflow-hidden w-full border-b">
          <img
            className="p-0 object-cover h-full w-full"
            src={props.objWork?.imgSrc}
            alt="product image"
          />
        </div>
        <div className="p-4 grid grid-rows-[auto_auto_auto] gap-1 text-center">
          <p className="text-xl font-bold text-gray-700 line-clamp-1">
            {props.objWork?.title}
          </p>
          {/* <p className="text-lg font-semibold text-primary">
            {props.objWork?.priceRange}
          </p> */}
          <Button
            onClick={() => {
              props.setIsOpen(true);
              props.setSelectedProduct(props.objWork);
            }}
            className="mt-4"
          >
            View More
          </Button>
        </div>
      </div>
    </Card>
  );
}
