export type Post = {
    id: number,
    thumbnail: string,
    video: string;
    title: string;
    creator?: {
        username: string,
        avatar: string
    }
};

const mockURL = 'https://www.bilibili.com/video/BV1b1wGemE93/?spm_id_from=333.788.recommend_more_video.0';

export const getAllPosts = (): Promise<Post[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const responseData = [{
                id: 1,
                thumbnail: 'film',
                video: mockURL,
                title: 'Superman',
                creator: {
                    username: 'Sara',
                    avatar: './assets/images/avatar.jpg'
                }
            },
            {
                id: 2,
                thumbnail: 'film',
                video: mockURL,
                title: 'Wizard',
                creator: {
                    username: 'Elle',
                    avatar: './assets/images/avatar.jpg'
                }
            }]

            resolve(responseData);
        }, 1000)
    });
}