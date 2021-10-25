//Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
/* Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore(nome, avatar), numero di likes, data creazione. */
//Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.

let likedPosts = []
let post = [
    {
        postId: 'post1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ut.',
        image: 'https://picsum.photos/500/300',
        userName: "Lisa Manoban",
        userPicture: "https://otakukart.com/wp-content/uploads/2021/07/lisa.jpg",
        likes: 180,
        datePosted: '2 months ago'

    },
    {
        postId: 'post2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ut. dolor sit amet consectetur adipisicing elit',
        image: 'https://picsum.photos/500/300',
        userName: "Roseanne Park",
        userPicture: "https://i1.sndcdn.com/avatars-000623436993-nsww59-t500x500.jpg",
        likes: 100,
        datePosted: '3 months ago'

    },
    {
        postId: 'post3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ut.Lorem ipsum dolor sit amet consectetur adipisicing elit',
        image: 'https://picsum.photos/500/300',
        userName: "Kim Ji-soo",
        userPicture: "https://qph.fs.quoracdn.net/main-qimg-7cbb400dde17f590f6b2726437768aa2",
        likes: 200,
        datePosted: '1 month ago'

    },
    {
        postId: 'post4',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
        image: 'https://picsum.photos/500/300',
        userName: "Jennie Kim",
        userPicture: "https://pbs.twimg.com/profile_images/1091914487525855233/pMvobmHb_400x400.jpg",
        likes: 302,
        datePosted: '3 months ago'

    },
]
let divEl = document.querySelector('.container')

for (let i = 0; i < post.length; i++) {
    let article = post[i]
    let postEl =
        `<div class="card ${article.postId}">
    <div class="row user pt-3">
    <div class="userPicture col-2 text-end">
                                <img
                                    src="${article.userPicture}"
                                      alt = "" id = "profile_picture" >
                            </div >
                        <div class="userInfo col-9">
                            <h2 class="user_name">
                                ${article.userName}
                            </h2>
                            <h5 class="post_date">
                                ${article.datePosted}
                            </h5>
                        </div>
                        </div >
                        <div class="px-2">
                            <p class="content">
                                ${article.content}
                            </p>
                            <div class="post_img">
                                <img src="${article.image}"
                                    alt="">
                            </div>
                        </div>
                        <div class="row d-flex text-center align-items-center
                            like_info">
                            <div class="like_btn col-6">
                                <button type="button" class="btn-lg like">
                                    <i class="fas fa-thumbs-up"></i>
                                    Like
                                </button>
                            </div>
                            <div class="like_counter col-6">
                                ${article.likes} people like this
                            </div>
    
                        </div>
                    </div >

        `
    divEl.insertAdjacentHTML('beforeend', postEl)
    let likeEl = document.getElementsByClassName('like')
    likeEl[i].addEventListener('click', function () {
        this.classList.add('blue')
        if (!likedPosts.includes(article.postId)) {
            likedPosts.push(article.postId)

        } else {
            this.classList.remove('blue')
            likedPosts.splice(i)
        }

    })



}
