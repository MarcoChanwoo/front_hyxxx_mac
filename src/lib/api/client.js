import axios from '../../../node_modules/axios/index';

// axios 인스턴스 생성
const client = axios.create();

/*  axios 인스턴스를 만들면 추후 API 클라이언트에 공통된 설정을 쉽게 삽입할 수 있음

    글로벌 설정 예시:
    // client.default.baseURL = 'https://external-api-server.com/'

    // 헤더 설정
    client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

    // 인터셉터 설정
    axios.intercepter.response.use(\
        response=>{
            // 요청 성공 시 특정 작업 수행
            return response
        },
        error=>{
            // 요청 실패 시 특정 작업 수행
            return Promise.reject(error)
        })    
    */

export default client;
