document.addEventListener("DOMContentLoaded", function () {
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const drawButton = document.getElementById("drawButton");
    const resultDiv = document.getElementById("result");
    const infoDiv = document.getElementById("info");
    const cardOptions = ["คว่ำ-คว่ำ", "คว่ำ-หงาย", "หงาย-หงาย", "หงาย-คว่ำ"];

    function getRandomCard() {
        return cardOptions[Math.floor(Math.random() * cardOptions.length)];
    }

    drawButton.addEventListener("click", function () {
        // ก่อนที่รูปจะเปลี่ยนหาย
        card1.querySelector(".card-img").style.opacity = 0;
        card2.querySelector(".card-img").style.opacity = 0;

        setTimeout(function () {
            const result = getRandomCard();
            resultDiv.textContent = `ผลลัพธ์: ${result}`;

            // เปลี่ยนรูปภาพตามผลลัพธ์
            if (result === "คว่ำ-คว่ำ") {
                card1.querySelector(".card-img").src = "Picture/คว่ำ.png";
                card2.querySelector(".card-img").src = "Picture/คว่ำ.png";
                infoDiv.textContent = "ถ้าไม้ปวยออกมาคว่ำทั้ง 2 อัน แปลว่าผลเซียมซีที่เป็นเรื่องดี จะเกิดขึ้นจริง ไม่ต้องเสี่ยงทายใหม่";
            } else if (result === "คว่ำ-หงาย") {
                card1.querySelector(".card-img").src = "Picture/คว่ำ.png";
                card2.querySelector(".card-img").src = "Picture/หงาย.png";
                infoDiv.textContent = "ถ้าไม้ปวยออกมาหงาย 1 อัน คว่ำ 1 อัน แปลว่าสิ่งศักดิ์สิทธิ์ไม่อนุญาตให้เสี่ยงทายใหม่ ให้เตรียมตัวเตรียมใจตั้งรับกับเหตุการณ์ที่จะเกิดขึ้น";
            } else if (result === "หงาย-คว่ำ") {
                card1.querySelector(".card-img").src = "Picture/หงาย.png";
                card2.querySelector(".card-img").src = "Picture/คว่ำ.png";
                infoDiv.textContent = "ถ้าไม้ปวยออกมาหงาย 1 อัน คว่ำ 1 อัน แปลว่าสิ่งศักดิ์สิทธิ์ไม่อนุญาตให้เสี่ยงทายใหม่ ให้เตรียมตัวเตรียมใจตั้งรับกับเหตุการณ์ที่จะเกิดขึ้น";
            } else if (result === "หงาย-หงาย") {
                card1.querySelector(".card-img").src = "Picture/หงาย.png";
                card2.querySelector(".card-img").src = "Picture/หงาย.png";
                infoDiv.textContent = "ถ้าไม้ปวยออกมาหงายทั้ง 2 อัน แปลว่าผลเซียมซีที่ไม่ดี อาจจะไม่เกิดขึ้นจริง ต้องลองเสี่ยงทายใหม่ ถ้าเสี่ยงออกมาใหม่แล้วได้ใบดี แปลว่าสิ่งศักดิ์สิทธิ์คุ้มครอง แต่ถ้าออกมาไม่ดีเหมือนเดิม ให้ทำใจยอมรับกับสิ่งที่จะเกิดขึ้น";
            }

            // หลังจากที่รูปถูกแสดงกลับมา
            card1.querySelector(".card-img").style.opacity = 1;
            card2.querySelector(".card-img").style.opacity = 1;
        }, 1000); 
    });
});
