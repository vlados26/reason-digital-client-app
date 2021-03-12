import TransportLayer from '../transport-layer.service';
import ITransportLayer from '../shared/interfaces/transport-layer.interfaces';

const transportLayer: ITransportLayer = TransportLayer.getInstance;

export const getPosts = async (): Promise<any> => {
    try {
        const { data } = await transportLayer.get(
            'https://dinotest.wpengine.com/wp-json/wp/v2/posts'
        );
        return data;
    } catch (err) {
        const { message } = err.data;
        throw new Error(message);
    }
};
