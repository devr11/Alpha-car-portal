"use client";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Container } from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Turntable } from "./TurnTable";
import { useState } from "react";
import EMICalculator from "./EMICalculator";
import Image from "next/image";

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [showEMICalculator, setShowEMICalculator] = useState(false);

  const ProductDetail = {
    name: "2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD",
    description:
      "Mahindra Thar is a 4 seater SUV available from ₹ 14.00 Lakh to ₹ 20.00 Lakh in India. It is available in 2 variants, 3 colours, 2 engine options that include Diesel and Petrol and 1 transmission option: Manual. Mahindra Thar is also available in Automatic transmission. The top competitors of the Mahindra Thar are Jeep Wrangler, Force Gurkha, Tata Safari and Maruti Suzuki Jimny.",
    currentMtr: "13K km",
    fuel: "Diesel",
    price: "₹ 14.00 Lakh",
    location: "Spinny Dealership, Bhopal, MP",
    makeYear: "Aug 2021",
    owner: "First Owner",
    registrationYear: "2021",
    color: "Red",
    insuranceValidity: "Nov 2025",
    transmission: "Manual",
    bodyType: "SUV",
    engine: "2.2 L",
    mileage: "13.96 kmpl",
    groundClearance: "226 mm",
    seatingCapacity: "4",
    bootSpace: "328 L",
    fuelTankCapacity: "57 L",
    displacement: "2199 cc",
    features: [
      "Bluetooth",
      "USB",
      "Air Conditioner",
      "Power Steering",
      "Power Windows",
      "Anti Lock Braking System",
      "Driver Airbag",
      "Passenger Airbag",
      "Central Locking",
      "Crash Sensor",
      "Rear Parking Camera",
      "Alloy Wheels",
    ],
    turnTableImgUrls: [
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/577adca051654bee8402cf96e54b65da/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/b1c87f6165554efcb5647492ba8a6b46/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/d82ebc3140854b27840b149067f0756a/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/f44d2a681cd84a2f8f60c56f6e5679ed/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/9d385282b1ad49cfbf12db23653e7f75/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/f11c3165c7354b188dd7eeb50ca421fa/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/f55c5266420040fb94341d14c1c70c4d/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/83531ae1411141ab95d1bff99748a80e/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/a477f062d9354b6985802b05b5115cae/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/1c7c9eda625d48a688ac60e6f6c479e4/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/e8ea4b394f7c4128855fd70020d58f91/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/addc3f6fe511476780a69feff010577d/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/7a91b7294e4c44719fcefcd9fe0a2a56/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/1d2c6d04bd674e8cad2e0895d9236399/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/92ba315a0b704e95b51075f659b2df38/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/e9108676760441bfa0ff1574dfd2b282/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/140e84b27d5e443a92763350553780b7/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/a440a4285980455cb786e20b5a5247ae/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/70af94cdc564484088eb42d4324898b3/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/0989da539ceb432e814a9472dbbf2538/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/67386b406dd2465e96e927e0544e12e1/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/22efe71c2e1f4ce3b7b37578f08a440e/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/80ce140bcbfc45438610f4ea17c33711/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/65e3043b331b4bc7a047b6fd644843f4/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/8084387dfaba45eda9b6bb2871630825/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/ebecc448c8ee4da9bffcabe869ab76fc/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/ea4d0c6ac9d045868199e47864b79c36/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/fdb338dd700f45f69cb60be4ea1b57e9/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/9cc4a86d6cf74e6588b036504129c321/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/45df7834855f4f009ff4570bd25d7a0e/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/0b3b6522b25e4cf58ecdc2ed653b0897/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/bf5ebced4e554d8d912ab45ac2eec8cf/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/70c556efb7034f228de0c357b79f9f07/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/be89e99ffb764c1dbe12289a2a74fc96/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/0c7036e4466a426f9c71b040dd701461/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/699fe3f1045348e3a0ca03378ff23ccf/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/5ddf9686bbac405d9fc0b5ec9e409793/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/3edb5710d89f44048e62b0b8f3869a84/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/eadf6a1c7f554d5fb6279730470f4ee1/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/b4d892b753cf4837b96f765dcc988e45/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/7ff55f26ff374009ab47a7af49410b4f/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/03a7a5da6ba341768765290b0cbf3cff/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/4a524f17abe94df2ac66f66daabfb654/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/7a5da7145324406e84cd7db48226fa0d/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/7a91b3df67814cb79d345cede9ec6179/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/de529bdf6d6e45a7ba6114ff038d8749/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/e614af269f8f4728a2b4e80388c3692d/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/57ff2f2f87ea4e528dca1307f988f114/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/a83712459aee4a8090dc3173bc193b8e/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/bcb4bff473e643e78860edef7bc865d7/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/e7901426e59d4fe4be102a17bb736ef2/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/3655125e55314eb09fb56b1a55e1dc5d/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/bfbb50d69efe4d0d80ddcda9ef175b90/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/a5a37df633864211a3725050dabf24f6/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/57940cffc64e48c3a7c87960de3aa5e4/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/91a06fe372fa4325af82e7a6aef2b6a6/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/9a994ac8cc454cc5a5ffdb3ec729c107/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/0f3cc69f9628406d8e47d41001677e72/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/a20b8af3b4264c2e890185ef3a40a665/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/e7b1a7b0b55b46e6b5abe54ed63f1892/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/194b98dcbdee4641a32f05068aa7d0aa/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/124ab3a5c5f84f859361b2b27b8d5ed8/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/2b5debcb90654d4586636854b27fde6d/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/86d751a750ef4860aef425cefdabe57f/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/27c8b7095d394339b2f0ee0684a6f928/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/3639833716f54131b9ceb40439cfb8e4/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/9314352b206d4e1e93999cdf3baf97db/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/3a2ba64319934113a7baa6aae9420200/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/3bdd807938e0484bb97abd18943c4ce7/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/e4debf53e5f844ddbf3440d0e9fc74f8/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/199b2595e5ec419084b92cc740065d53/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/b8a3af871f3b4ac892a6271958f1b13c/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/825ecf1f71f44c31927f42d2b80da1a6/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/d31d0086302e40ebb8621a74b9161559/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/b24c5bfb411b4c4ead53f9a93beac7d5/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/bf1dfd3d74c048d9a37552f68bcbfe30/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/6f5ffe9a576c47eb82118010edab788e/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/b2baa52aab244f5c9f9629bb53de139e/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/385ecfc359b4484d9977ab52d58e0b45/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/5b79186c1c96481d93b59f9aa51cd499/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/c37c1a5e0d1c42d1ac18c7a636e13822/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/fbe597b7363941f09dda142e4ff8c2fe/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/4758b7f2821f4872a1baf72eac11bf5c/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/6e0783d26f774f57919ea3292ad98348/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/715f9895a48a43809db6fbeb11e467bb/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/333da85afad3417695a163c066a5026d/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/e4abdf5b3fcb4ddd81659a9a7f5a1652/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/4427a1ff74854205997f33a468fb57d3/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/153e85d4f8ce42e192ce77f8ae9093c4/raw/file.JPG",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/08393e4394c84654a32f446bb2651243/raw/file.JPG",
    ],
    carouselImgUrls: [
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/3bad01e406f9439684e5672e5c5bfdfd/raw/file.JPG?q=85&w=900&dpr=1.3",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/9ad12e88626f4b2ab24ea83e5fa302a0/raw/file.JPG?q=85&amp;w=900&amp;dpr=1.3",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/41a8a8b2a63b414d81c687c80d30ede2/raw/file.JPG?q=85",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/953c9ed5b8e24caea1816de9beb6f53d/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/e7fb987326e3465dbbf6782dccee4d2c/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/8d7b4bc2fdcf4188a934178e9d8cd167/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/6eee2a4ff0cf411eac08bc7560dc8e08/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/7bda23a875de4550b17b006ba26bc30e/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/3bad01e406f9439684e5672e5c5bfdfd/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/9ad12e88626f4b2ab24ea83e5fa302a0/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/a2d9912c99894eb2b8bfa30406647b4d/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/3b6c612714954ac29b71dda47d270afa/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/4853cedc856f46a1942a9805845f51ef/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/af0aae5931d34af28f94b0b747d65d12/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/9a8177b3551246e0964e0d7fed8b0ba4/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/1608f8a1ba444ff192012d870482d139/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/3c327ee07b9641339a896707e6d25e51/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/0b50cfea7849486b8ab59879a065ecb2/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/956bdee3252c4fd2957cb31610899d84/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/956bdee3252c4fd2957cb31610899d84/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/c0814a0f7e2749239349fb1d3d99bd28/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/9cbe07f358474547b2acd4b8f846e567/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/dee8a45398064d44a481d4101c099ff2/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/7fc4d15083e04b478e803dda96fafe19/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/b7b39bc072704693a6489d16491bf088/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/ee38b1a395df4dd0a49215cdfce686f2/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/ea65349f12d24a72965a32609694220a/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/88b4f86548d846ebb8b07a9975b628db/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/438a0e4440cf424b97a0e73ce227c3a9/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/8239bf597f7240f7b8a0454f7b4b7133/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/5e4b95fa39fb4affaf449e805f65886a/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/dab74789fe524116943932d1bb9bc2b4/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/ca4ee9af20ec4225881659bc7f712da3/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/67797df0e7ec4c7887921c3274febff6/raw/file.JPG?q=85&amp;w=320" ,
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/67cfa5e7363c42e3a53bc527f372b84e/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/43b8d2912a6c4b8ca0ee7b7aae9df404/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/6a7ad5eaa84d49a59e657b41e1690991/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/b97530e5c85342a7850826624ef2bfbf/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/74bd0840142b435eb0cfe1cb57d62d88/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/a9287b106d2a40b4a556f90810b04470/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/541fbd0c27524cc1baf4a7ace9ddbf29/raw/file.JPG?q=85&amp;w=320",
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/eca4b98ebf3044a3a3a159ade1566d8f/raw/file.JPG?q=85&amp;w=320"
  ],
  };

  return (
    <Container>
      <div className='w-full flex flex-col mt-4 lg:flex-row h-full gap-2'>
        <div className='w-full lg:w-2/3 h-[50vh] md:h-[70vh] lg:h-[85vh] relative'>
          <button
                        className='absolute top-4 right-4 z-10 bg-white text-[#561381] px-4 py-2 rounded shadow-lg font-semibold'
                        onClick={() => setShowPopup(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-view-360-number"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" /><path d="M3 5h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" /><path d="M17 7v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" /><path d="M3 16c0 1.657 4.03 3 9 3s9 -1.343 9 -3" /></svg>
                    </button>

          <Swiper
            className="h-3/4 w-full rounded-xl"
            style={{
              "--swiper-navigation-color": "#fff",
            }}
            spaceBetween={0}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            loop={true}
          >
            {ProductDetail.carouselImgUrls.map((url, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center bg-black"
              >
                <img src={url} className="h-full w-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="mt-2 rounded-xl h-1/4"
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {ProductDetail.carouselImgUrls.map((url, index) => (
              <SwiperSlide
                key={index}
                className="flex rounded-xl items-center justify-center bg-black"
              >
                <img src={url} className="h-full w-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full lg:w-full flex h-full gap-y-2 flex-col mt-4 lg:mt-0">
          <div className="rounded-xl border-2 border-black bg-gray-200 text-black">
            <div className=" px-4 ">
              <h1 className="text-md font-semibold mt-2">
                {ProductDetail.name}
              </h1>
              <div className="text-sm tracking-wider opacity-70 items-center">
                <span>{ProductDetail.currentMtr}</span> •{" "}
                <span>{ProductDetail.fuel}</span> •{" "}
                <span>{ProductDetail.transmission}</span>
              </div>
              <div className="flex items-center my-2 opacity-70">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                  </svg>
                </div>
                <div className="text-xs leading-loose tracking-wider">
                  {ProductDetail.location}
                </div>
              </div>
            </div>
            <div className="w-full border border-black" />
            <div className="px-4 mt-2">
              <div className="text-sm opacity-90 tracking-wide">
                Fixed on road price
              </div>
              <div className="text-2xl font-semibold mt-2 mb-2">
                {ProductDetail.price}{" "}
                <span className="text-base">+ 1% TCS </span>
              </div>
              <div className="flex text-xs opacity-70 mb-4">
                {" "}
                Includes RC transfer , insurance & more
              </div>
              <div className="w-full border border-black" />

              <button className="w-full bg-[#561381] tracking-wide text-white py-2 rounded-lg my-2 font-semibold">
                Book a Test Drive
              </button>

              <div className="text-black px-4 py-2 rounded-lg mb-2 text-center">
                <div className="text-lg font-bold">₹24,136/m</div>
                <div className="text-xs opacity-90">Valid for 02h 04m 18s</div>
              </div>

              <button
                className="w-full bg-white border-2 border-[#561381] text-[#561381] py-2 rounded-lg my-2 font-semibold flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors"
                onClick={() => setShowEMICalculator(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="4" height="16" x="6" y="2" />
                  <rect width="4" height="16" x="14" y="2" />
                  <rect width="18" height="18" x="3" y="6" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                EMI Calculator
              </button>
            </div>
          </div>
          <div className="rounded-xl border bg-gray-300 text-black border-black px-4">
            <h1 className="text-lg font-semibold mt-2">Key Specifications</h1>

            <div className="grid grid-cols-2 gap-y-2 mb-4 mt-2">
              <div className="flex flex-col gap-y-1">
                <span className="text-sm opacity-70">Fuel Type</span>
                <span className="font-semibold">{ProductDetail.fuel}</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-sm opacity-70">Transmission</span>
                <span className="font-semibold">
                  {ProductDetail.transmission}
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-sm opacity-70">Mileage</span>
                <span className="font-semibold">{ProductDetail.mileage}</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-sm opacity-70">Year</span>
                <span className="font-semibold">{ProductDetail.makeYear}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-white overflow-hidden">
          <div className="h-full w-full flex flex-col">
            <div className="flex justify-between items-center pt-4 pb-3 px-4 md:px-6 shadow-sm border-b border-gray-100">
              <div className="flex gap-x-3 items-center flex-1 min-w-0">
                <button
                  className="text-gray-500 hover:text-gray-800 transition-colors shrink-0"
                  onClick={() => setShowPopup(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l6 6" />
                    <path d="M5 12l6 -6" />
                  </svg>
                </button>
                <div className="min-w-0 flex-1">
                  <div className="text-base md:text-lg font-semibold leading-tight truncate">
                    {ProductDetail.name}
                  </div>
                  <div className="text-xs md:text-sm opacity-70">
                    Back to Car Details
                  </div>
                </div>
              </div>
              <div className="flex gap-2 md:gap-4 items-center shrink-0">
                <div className="text-lg md:text-xl font-bold">
                  {ProductDetail.price}
                </div>
              </div>
            </div>

            <div className="px-4 md:px-8 pt-4 md:pt-6">
              <div className="flex gap-4 md:gap-8 border-b justify-center border-gray-200 mb-4">
                {["360° View", "Interior", "Gallery"].map((tab, idx) => (
                  <button
                    key={tab}
                    className={`pb-3 px-2 text-sm md:text-base font-medium focus:outline-none transition-colors ${
                      selectedTab === idx
                        ? "border-b-2 border-[#561381] text-[#561381]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setSelectedTab(idx)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 px-4 md:px-8 pb-4 overflow-auto">
              <div className="h-full">
                {selectedTab === 0 && (
                  <div className="h-full flex items-center justify-center">
                    <div className="w-full max-w-6xl">
                      <Turntable images={ProductDetail.turnTableImgUrls} />
                    </div>
                  </div>
                )}
                {selectedTab === 1 && (
                  <div className="h-full flex justify-center items-center">
                    <div className="w-full max-w-5xl">
                      <iframe
                        width="100%"
                        allowFullScreen
                        className="rounded-lg"
                        style={{
                          border: "none",
                          width: "100%",
                          height: "min(60vh, 80vw)",
                          minHeight: "300px",
                        }}
                        src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//mda.spinny.com/sp-file-system/public/2024-10-27/bacd6c20bfc1424389b8deecf81f1304/raw/file.JPG%3Foriginal%3Dtrue&autoLoad=true"
                      />
                    </div>
                  </div>
                )}
                {selectedTab === 2 && (
                  <div className="h-full flex items-center justify-center">
                    <div className="w-full max-w-4xl">
                      <Swiper
                        className="rounded-xl h-[50vh] md:h-[60vh]"
                        style={{
                          "--swiper-navigation-color": "#561381",
                          "--swiper-navigation-size": "20px",
                        }}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        loop={true}
                      >
                        {ProductDetail.carouselImgUrls.map((url, index) => (
                          <SwiperSlide
                            key={index}
                            className="flex items-center justify-center bg-black rounded-xl overflow-hidden"
                          >
                            <Image
                              src={url}
                              className="h-full w-full object-cover"
                              alt={`Car view ${index + 1}`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <EMICalculator
        isOpen={showEMICalculator}
        onClose={() => setShowEMICalculator(false)}
        carPrice={1400000}
      />
    </Container>
  );
};

export default Product;
