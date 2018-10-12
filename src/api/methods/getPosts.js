import Api from '../../api';
import ApiConstants from '../ApiConstants';

export default function getPosts() {

    return Api(
        ApiConstants.BASE_URL + ApiConstants.POSTS,
        null,
        'get',
        null,
    );
}
