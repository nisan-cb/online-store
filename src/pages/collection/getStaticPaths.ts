import { GetStaticPaths } from 'next'
import config from "../../config.json";

const getStaticPaths: GetStaticPaths = () => {
    const paths = config.categories;

    const mappedPaths = paths.map((path) => ({ params: { id: path } }));

    // Return the paths object
    return {
        paths: mappedPaths,
        fallback: false,
    };
}

export default getStaticPaths;
