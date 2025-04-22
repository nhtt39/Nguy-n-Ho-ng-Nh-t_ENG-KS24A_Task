const slides = [
    {
        image: "../assets/img/3f8438a6cfd5ea4fdf5a75af085b8a89ef96fabe.png",
        title: "Kho học liệu miễn phí",
        description: "Miễn phí truy cập kho tài liệu khổng lồ, bao gồm bài giảng, video và tài liệu đọc phù hợp với mọi đối tượng."
    },
    {
        image: "banner2.jpg",
        title: "Hình thức E-learning",
        description: "Học mọi lúc, mọi nơi với hàng loạt video bài giảng trực tuyến đa dạng và linh hoạt."
    },
    {
        image: "banner3.jpg",
        title: "Bài tập vận dụng mô phỏng",
        description: "Áp dụng kiến thức thông qua các bài tập mô phỏng tình huống thực tế"
    }
];

function showSlide(index) {
    const bannerImage = document.getElementById("banner-image");
    const bannerTitle = document.getElementById("banner-title");
    const bannerDescription = document.getElementById("banner-description");
    const dots = document.getElementsByClassName("dot");

    bannerImage.src = slides[index].image;
    bannerTitle.textContent = slides[index].title;
    bannerDescription.textContent = slides[index].description;

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
}