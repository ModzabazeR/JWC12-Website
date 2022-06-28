import Image from "next/image"

const db = [
    {
        name: "แมทธิว นักธุรกิจ",
        message: "หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ",
        profilePic: "/user.png",
    },
    {
        name: "แจ็ค นักแสดง",
        message: "ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ",
        profilePic: "/user.png",
    },
    {
        name: "น้ำใส นักศึกษา",
        message: "ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา",
        profilePic: "/user.png",
    },
]

const Reviews = () => {
    return (
        <section className="flex flex-col p-8 items-center text-center">
            <h1 className="text-4xl mt-8 ">รีวิวจากลูกค้า</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-64 lg:w-3/4">
                {
                    db.map((data, i) => {
                        return(
                            <div key={i} className="lg:flex lg:flex-col lg:items-center my-4 lg:mx-8">
                                <div className="p-6 lg:h-auto lg:w-72">
                                    <Image src={data.profilePic} width={1200} height={1200} layout="responsive" />
                                </div>
                                <h2 className="text-3xl mb-2">{data.name}</h2>
                                <p>{data.message}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Reviews;