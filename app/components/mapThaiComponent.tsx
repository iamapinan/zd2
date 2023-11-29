import { GetStaticPaths,GetStaticProps } from 'next';

const mapThaiComponent = () => {
    return (
        <>
            <h1>mapThaiComponent</h1>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = () => {


    return {
        paths:[],
        fallback:false
    }
}
export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default mapThaiComponent;