import Button from "../elements/buttons";

const CircleCardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-128 h-128 bg-green-800 border border-green-700 rounded-full shadow mx-2 my-2 flex flex-col justify-between overflow-hidden">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#" className="block h-32 w-full overflow-hidden">
            <img 
                src={image}
                alt="product"
                className="w-full h-full object-cover"
            />
        </a>
    );
};

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-4 text-center h-full">
            <a href="#">
                <h5 className="text-lg font-semibold tracking-tight text-white truncate">
                    {name}
                </h5>
                <p className="text-sm text-white overflow-hidden line-clamp-2">
                    {children}
                </p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex flex-col items-center gap-2 p-3">
            <span className="text-lg font-bold text-white">
                {price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
            </span>
            <Button 
                variant="default"
                className="bg-green-600 hover:bg-green-700 text-sm px-1 py-1 rounded-full w-full"
                onClick={() => handleAddToCart(id)}
            >
                Add To Cart
            </Button>
        </div>
    );
};

CircleCardProduct.Header = Header;
CircleCardProduct.Body = Body;
CircleCardProduct.Footer = Footer;

export default CircleCardProduct;