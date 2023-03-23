import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import {
    Container,
    Grid,
    Tabs,
    Tab,
    Box,
    Typography,
    Avatar,
    Button,
    Card,
    TextField,
} from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import moment from "moment";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useAuth } from "../../contexts/AuthContext";

const Colleges = [
    {
        id: "34f1060e-0f2a-468b-b7ae-62e038d7b6fa",
        college: "A M C College of Engineering, Bengaluru",
    },
    {
        id: "9ab5ea7a-b6f4-4c55-9659-47e1ecfb275b",
        college: "A. D. Patel Institute of Technology, Anand",
    },
    {
        id: "df174140-6ff4-4a35-ab77-c157627fb2e1",
        college:
            "A. M. Reddy Memorial College of Engineering and Technology, Narasaraopet",
    },
    {
        id: "48541b57-ecc1-4507-9cd8-c0c95555d09a",
        college: "A.V.C. College of Engineering, Mayiladuthurai",
    },
    {
        id: "633f32eb-36fd-4109-8bf1-b5d43d65fc6f",
        college: "AARUPADAI VEEDU INSTITUTE OF TECHNOLOGY, Chennai",
    },
    {
        id: "b2d2b234-2fc3-4bae-b778-7b35f0094862",
        college: "ABACUS Institute of Engineering and Management, Magra",
    },
    {
        id: "89a9138f-515e-49ed-870f-f56abc09c2c6",
        college: "ABES Engineering College, Ghaziabad",
    },
    {
        id: "44748b2c-4b8d-4fc4-8f07-754f3bb05f87",
        college: "ABES INSTITUTE OF TECHNOLOGY, GHAZIABAD, Ghaziabad",
    },
    {
        id: "c354eec8-cced-4819-9da3-178562884f1d",
        college: "ABSS INSTITUTE OF TECHNOLOGY, MAWANA ROAD, MEERUT, MEERUT",
    },
    {
        id: "19ae1825-0957-489e-af2e-d71ab37c8f0e",
        college: "Academy of Maritime Education and Training, Kancheepuram",
    },
    {
        id: "e591d6bc-77e0-41f6-9658-d890980da13d",
        college: "Accurate Institute of Management & Technology, Greater Noida",
    },
    {
        id: "6427a5b1-c52d-42ec-890b-c4277a8afb8a",
        college: "Acharya Institute of Technology, Bengaluru",
    },
    {
        id: "398765d0-46d1-46ac-9e33-2f8735729c06",
        college: "Acropolis Institute Of Technology And  Research, Indore",
    },
    {
        id: "46f5dea5-1739-43dd-a3c5-168ab4868baf",
        college: "ACS COLLEGE OF ENGINEERING, Bengaluru",
    },
    {
        id: "8d40679e-d7c8-44b7-9fe6-7e8eb8347995",
        college: "Adi Shankara Institute of Engineering and Technology, Kalady",
    },
    {
        id: "769538b6-9aad-4206-bcdd-07b993017475",
        college: "Adichunchanagiri Institute of Technology, Chikmagalur",
    },
    {
        id: "65c9b27b-3e33-4821-af38-59a209190f1a",
        college: "Adikavi Nannaya University, Rajahmundry",
    },
    {
        id: "9349e2a6-5aa1-4e73-b1f6-be6e7381b25b",
        college: "ADINA INSTITUTE OF SCIENCE AND TECHNOLOGY, SAGAR, MP, Sagar",
    },
    {
        id: "63655b6d-8f10-4f30-91b9-48f3f801c7e0",
        college: "Aditya College of Engineering, Surampalem",
    },
    {
        id: "e553a1c4-faff-45a7-a31b-eb92a36b66c8",
        college: "Aditya College of Engineering, Madanapalle",
    },
    {
        id: "8ea91bd6-7d88-4f5f-ae68-68529684d51c",
        college: "Aditya College of Engineering & Technology, Surampalem",
    },
    {
        id: "49dddec7-8767-4fe7-8675-d686b7397357",
        college: "Aditya Engineering College, Surampalem",
    },
    {
        id: "3ce81f23-d7f1-4c24-8fd8-ef94bd17c88e",
        college: "Aditya Institute of Technology and Management, Tekkali",
    },
    {
        id: "0faf1899-3080-4b9d-8bdc-7054984f63fd",
        college: "Agnel Institute of Technology and Design, Assagao",
    },
    {
        id: "2a3b7dbe-a2ee-4b41-82d7-79b618acf1dd",
        college: "Agni College of Technology, CHENNAI",
    },
    {
        id: "96a3f0d9-560e-4553-9f69-b3ee3e1ddd5e",
        college: "Ajay Kumar Garg Engineering College, Ghaziabad",
    },
    {
        id: "5a661e73-bcdc-4c2f-a9d7-7244f78be423",
        college: "AKSHAYA COLLEGE OF ENGINEERING AND TECHNOLOGY, Coimbatore",
    },
    {
        id: "ff41605d-bbfa-4989-a3d0-7f1d42052355",
        college:
            "Aldel Education Trusts St John College of Engg Vevoor Palghar Tal Palghar Dist Thane, Thane",
    },
    {
        id: "82f1a2a2-97d8-4850-8a92-2537df2ea31a",
        college: "Alfa College of Engineering and Technology, Allagadda",
    },
    {
        id: "eb309261-df77-4e9a-bcc1-967cff06abda",
        college: "Aligarh Muslim University, Aligarh",
    },
    {
        id: "8205269b-6bc7-4785-a474-f53bc0dd4917",
        college:
            "All India Shivaji Memorial Societys College of Engineering, Pune, Pune",
    },
    {
        id: "21f6a94f-f39e-480b-87c0-4c837ea0592c",
        college:
            "All India Shri Shivaji Memorial Society's Institute of Information Technology, Pune",
    },
    {
        id: "20beac88-f38b-4726-997a-c1cc461f54d4",
        college: "Alliance University, Bengaluru",
    },
    {
        id: "5d8f383d-ee8a-49d5-9079-49806a36f095",
        college:
            "Alvas Institute of Engineering and Technology, MOODBIDRI, Dakshina Kannada",
    },
    {
        id: "d944c845-854b-46b8-8a07-dcebd4da7691",
        college: "AMAL JYOTHI COLLEGE OF  ENGINEERING, Kottayam",
    },
    {
        id: "8f467cdf-ca71-4dd4-a543-1a997b27a735",
        college: "Ambal Professional Group of Intuitions, Tiruppur",
    },
    {
        id: "f03b29e6-53b9-446f-9ad3-081000d44f59",
        college:
            "Ambedkar Institute of Advanced Communication Technologies and Research, Delhi",
    },
    {
        id: "caf74d01-f4b0-4ed6-83f5-2c8c99a16a82",
        college: "Amity University Gwalior, Gwalior",
    },
    {
        id: "abea1a85-50ef-44a2-b9be-203a8728fa73",
        college: "Amity University Noida, Gautam Budh Nagar",
    },
    {
        id: "4a1d09bd-3bba-4aa1-aa88-2e03f520c5a9",
        college: "Amrita Sai Institute of Science & Technology, Krishna",
    },
    {
        id: "67c777f6-2a61-4745-889b-f40f6e25dccb",
        college: "Amrita Vishwa Vidyapeetham, Coimbatore",
    },
    {
        id: "764ff52f-4fbb-4623-8a96-53a13b027d0a",
        college: "Amritsar College of Engineering & Technology, Amritsar",
    },
    {
        id: "69cc5e96-db16-4d8c-8dda-24542dfe93a8",
        college: "Amrutvahini College of Engineering, Sangamner, Sangamner",
    },
    {
        id: "336600f7-66e6-43bd-9935-c6ce92ff5df1",
        college: "ANAND INSTITUTE OF HIGHER TECHNOLOGY, Chennai",
    },
    {
        id: "31a79887-0ba2-4745-8aaa-8c4ecd1173dc",
        college: "Andhra Engineering College, Atmakur",
    },
    {
        id: "93143beb-efe5-4345-9ec8-655b17173d88",
        college:
            "Andhra Loyola Institute of Engineering and Technology, Vijayawada",
    },
    {
        id: "08884b72-9920-4139-855a-8caa05c0635b",
        college: "Angadi Instittute of Technology and Management, Belgaum",
    },
    {
        id: "f4ce5078-0ee0-4ace-860f-219264a57e8b",
        college:
            "ANIL NEERUKONDA INSTITUTE OF TECHNOLOGY & SCIENCES, Visakhapatnam",
    },
    {
        id: "e8d1d7b7-cb5d-402f-8160-d1bf2fc15877",
        college: "Anjuman-I-Islam's Kalsekar Technical Campus, New Panvel",
    },
    {
        id: "e7a8298b-ba6c-4e9b-8225-7f8941966383",
        college: "Anna University, Chennai",
    },
    {
        id: "fad5f933-14d0-479b-ac34-9a6bd4d2e789",
        college: "Annai Vailankanni College of Engineering, Nagercoil",
    },
    {
        id: "e40c62eb-bd9c-4e71-aec9-61b281bed1f8",
        college: "ANNAMACHARYA INSTITUTE OF TECHNOLOGY & SCIENCES, Rajampet",
    },
    {
        id: "911b7b53-57a2-4cc3-980e-eeccf251fd81",
        college: "Annamacharya Institute of Technology & Sciences, Tirupati",
    },
    {
        id: "4e62ad32-32c1-4da8-9076-f81486f1730f",
        college: "Annamalai University, Annamalainagar",
    },
    {
        id: "63df7319-f724-49d4-bf02-21858501aa90",
        college:
            "Annasaheb Dange College of Engineering and Technology, Ashta, Ashta",
    },
    {
        id: "97dbe21b-abe9-4c4a-9c01-a596ac432913",
        college: "Anurag Engineering College, ANANTHAGIRI (V&M)",
    },
    {
        id: "5313040c-4b12-4475-9bf6-f97e266db61b",
        college: "Anurag Group of Institutions, Hyderabad",
    },
    {
        id: "9fb111aa-1208-4a14-a0b6-f936095e56ae",
        college:
            "APEEJAY INSTITUTE OF MANAGEMENT AND ENGINEERING TECHNICAL CAMPUS, JALANDHAR",
    },
    {
        id: "f74bc31c-70ab-4a13-a5e4-97a9394c1c11",
        college: "Arasu Engineering College, Thanjavur",
    },
    {
        id: "dc7b2119-c7c0-4d62-8f99-2a315e0b12c9",
        college: "Aravali Institute of Technical Studies,Udaipur, Udaipur",
    },
    {
        id: "2f0bcd45-8445-43dd-bc8b-c4918a1e1e67",
        college: "Army Institute of Technology, Pune",
    },
    {
        id: "5663813e-d9b4-4352-b805-9c1bca0244a8",
        college:
            "Arya College of Engg. & Information Technology, Jaipur, Jaipur",
    },
    {
        id: "415aaaeb-76e3-43a6-9a85-a136ff6e3bf0",
        college:
            "Aryan Institute of Engineering and Technology, (AIET), Barakuda, Khurda, Bhubaneswar, Khordha",
    },
    {
        id: "342b47da-3467-4d6e-a0cd-f83c4053eb34",
        college: "Asansol Engineering College, Asansol",
    },
    {
        id: "8e7239fe-9790-4999-b549-46f44fccd324",
        college: "Assam Don Bosco University, Azara",
    },
    {
        id: "e5d62969-3ee6-482d-874b-a9da246b7a58",
        college: "Assam Downtown University, Guwahati",
    },
    {
        id: "b278f64a-6501-4465-aad2-16da46e99933",
        college: "Assam University, Silchar",
    },
    {
        id: "a6beb455-cd36-4b0f-8e71-f6eeb7a029d3",
        college:
            "Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior",
    },
    {
        id: "ab0af440-1532-45b4-89b1-1fc2cab60f63",
        college: "ATHARVA COLLEGE OF ENGINEERING, Mumbai Suburban",
    },
    {
        id: "51dd7f4f-8a4a-4e9c-9ee7-69c3b6143be1",
        college: "ATME College of Engineering, Mysore",
    },
    {
        id: "87fd0cef-08e3-48bc-8567-0cfc84df49f6",
        college: "Audisankara College of Engineering & Technology, Gudur",
    },
    {
        id: "8cd44de1-2d27-4f9c-b3f5-e134aa54da78",
        college: "Aurora's Engineering College, Bhongir",
    },
    {
        id: "39fb6872-5142-48f7-b8d7-67dd0855c76b",
        college: "Aurora's Scientific & Technological Institute, Hyderabad",
    },
    {
        id: "f35fcdb9-7eea-4088-ba41-cb6a9c9fe116",
        college: "AURORA'S TECHNOLOGICAL AND RESEARCH INSTIUTE, Hyderabad",
    },
    {
        id: "c577fe1d-e99f-44fa-820a-64713cf2e61d",
        college: "B I T SINDRI, Dhanbad",
    },
    {
        id: "69ec940a-0271-4660-8a4e-6293166f70df",
        college:
            "B K Birla Institute of Engineering & Technology, Pilani, Jhunjhunun",
    },
    {
        id: "abf66d3b-5abc-47ef-bd4c-4b5bf1d6e96e",
        college: "B. G. S. Institute of Technology, Mandya",
    },
    {
        id: "bccbb092-051a-4f40-8dd8-624455f5a95d",
        college: "B. P. Poddar Institute of Management & Technology, Kolkata",
    },
    {
        id: "092aa997-0fc4-4195-96e4-5f88a0d05e72",
        college:
            "B. S. Abdur Rahman Crescent Institute of Science and Technology, Chennai",
    },
    {
        id: "75a5f64d-ee6d-4748-a2cd-3faf305f99a5",
        college: "B.M.S. College of Engineering, Bengaluru",
    },
    {
        id: "2a32ed7c-df80-4afc-9bc4-58c2b17ec168",
        college:
            "Baba Banda Singh Bahadur Engineering College, Fatehgarh Sahib, Fatehgarh Sahib",
    },
    {
        id: "d1192a84-952f-4f87-bc6b-ac75fb370542",
        college: "Baba Ghulam Shah Badshah University, Rajouri",
    },
    {
        id: "4e67ed42-d95c-4436-9290-2ec8e2892ed8",
        college: "Ballari Institute of Technology & Management, Bellary",
    },
    {
        id: "63a3279b-e984-45d8-8d0f-37f9d125074a",
        college: "Bangalore Institute of Technology, Bangalore",
    },
    {
        id: "47ec2661-f006-4976-83ca-935946bbd147",
        college: "Bangalore University, Bangalore",
    },
    {
        id: "6a95db3b-5e54-40ce-b53c-e415f246adf3",
        college:
            "BANSAL INSTITUTE OF ENGINEERING & TECHNOLOGY,LUCKNOW, LUCKNOW",
    },
    {
        id: "d17da628-1d3f-40b6-8eb0-4a300bd0c6e2",
        college: "Bapatla Engineering College, Bapatla",
    },
    {
        id: "8117c516-2468-4cf9-8e33-a008e6c1f39a",
        college: "Bapatla Women's Engineering College, Bapatla",
    },
    {
        id: "e0c61cf4-f8e9-49a2-b263-dc68dfd3810e",
        college: "BASAVAKALYAN ENGINEERING COLLEGE, Basavakalyan",
    },
    {
        id: "733ab125-6cd9-4ed0-9a5e-f844b830be50",
        college: "Basaveshwar Engineering College, Bagalkot",
    },
    {
        id: "6c0deb98-a454-4150-83b3-6cdc16c3041c",
        college:
            "BEANT COLLEGE OF ENGINEERING & TECHNOLOGY,GURDASPUR, Gurdaspur",
    },
    {
        id: "5981ee1c-0896-4039-8147-d6c0aa9d4b73",
        college: "Bengal College of Engineering, Durgapur",
    },
    {
        id: "a63731d3-c1d4-41be-aea1-474f7c8e065a",
        college: "Bengal College of Engineering & Technology, Durgapur",
    },
    {
        id: "441f0942-5697-4b90-a0c4-0e267d49e49c",
        college: "Bengal Institute of Technology, Kolkata",
    },
    {
        id: "2cd88d6f-28bf-487e-8cc9-c5dd292d0e67",
        college: "Bhagalpur College of Engineering, Bhagalpur",
    },
    {
        id: "4aae0d0e-78c5-4321-9c3a-6f857778af8b",
        college: "Bhagwan Parshuram Institute of Technology, Delhi",
    },
    {
        id: "c2c82d96-aea5-42ea-abb6-e9ab9080d5f3",
        college: "Bharat Institute of Engineering & Technology, Rangareddy",
    },
    {
        id: "26e87f84-ba7b-47ac-8a9a-10fe428d8558",
        college:
            "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING, NAVI MUMBAI, Navi Mumbai",
    },
    {
        id: "d2e36adb-a764-40ce-af18-3dd4bac204dd",
        college:
            "Bharati Vidyapeeth Deemed University College of Engineering, Pune",
    },
    {
        id: "cfecd789-ab7f-4b8d-8008-945e27a999ac",
        college: "Bharati Vidyapeeth's College of Engineering for Women, Pune",
    },
    {
        id: "d482058a-6c56-47e6-ab1d-cbaeeb348c35",
        college: "Bharati Vidyapeeth's College of Engineering, Kolhapur",
    },
    {
        id: "bb403e2c-d785-4fad-a5a4-37516db134b3",
        college: "Bharati Vidyapeeth's College of Engineering, Pune",
    },
    {
        id: "fcb65138-0b6a-44b6-8d2c-257e46025a5b",
        college: "Bharati Vidyapeeth's College of Engineering, New Delhi",
    },
    {
        id: "96494b9b-dd31-4dbf-b355-fa2c6bf1e43b",
        college:
            "Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology, Mumbai",
    },
    {
        id: "99d884a3-ab30-4afd-8a1d-71060007d938",
        college: "BHEEMA INSTITUTE OF TECHNOLOGY AND SCIENCE, Adoni",
    },
    {
        id: "d3934005-1f8b-4a5b-a8a9-2113cd5fd460",
        college: "Bheemanna Khandre Institute of Technology, Bhalki",
    },
    {
        id: "07fc49bd-744d-40b5-8881-657fd0a0ecb7",
        college: "Bhilai Institute of Technology, Durg",
    },
    {
        id: "76f870c5-808d-479e-859b-176bad328bc1",
        college: "Bhilai Institute of Technology, Raipur",
    },
    {
        id: "42dd7d10-353e-4a21-85c8-2ec52e29e914",
        college: "BHUBANESWAR COLLEGE OF ENGINEERING, Damanabhuin",
    },
    {
        id: "4a87fd1f-41b1-4147-a95a-72b0e6f50ff2",
        college: "Birla Institute of Technology, Ranchi",
    },
    {
        id: "f958bd08-a11d-4afc-ab86-87ffac6b106c",
        college: "Birla Institute of Technology & Science, Pilani",
    },
    {
        id: "3b9d5f40-c223-4789-9bb9-0c2cc62678ac",
        college: "Birla Vishvakarma Mahavidyalaya, Vallabh Vidyanagar",
    },
    {
        id: "cb54bfed-e221-4c69-8cb7-d5e3e9dcda6c",
        college: "BLDEA's College of Engg. & Technology, Bijapur",
    },
    {
        id: "860a1298-91dc-4f86-b8b0-5c916664a134",
        college: "BM COLLEGE OF TECHNOLOGY, INDORE",
    },
    {
        id: "b7f35094-65dd-44dc-b7d4-adbe912b5fdf",
        college: "BMS Institute of Technology & Management, Bengaluru",
    },
    {
        id: "57bcfcf1-9685-454d-8d37-7e7396ef051a",
        college: "BNM Institute of Technology, Bengaluru",
    },
    {
        id: "2eed7033-2437-4189-b9f9-e2a5fab65952",
        college:
            "Bonam Venkata Chalamaiah Institute of Technology and Science, Bhatlapalem",
    },
    {
        id: "ae590480-e468-4131-8a4c-7f0b4e14ff46",
        college: "BONAM VENKATA CHALAMAYYA ENGINEERING COLLEGE, Odalarevu",
    },
    {
        id: "a0891d37-856f-412a-8066-686531f37f1d",
        college: "BRAHMDEVDADA MANE INSTITUTE OF TECHNOLOGY, Belati",
    },
    {
        id: "fb7269bc-8ef7-476b-a270-e722da17068b",
        college: "BRAINWARE UNIVERSITY, Kolkata",
    },
    {
        id: "a7e4ab27-29c6-4352-85f0-d492bfefe5ae",
        college: "BRCM COLLEGE OF ENGINEERING & TECHNOLOGY, Bahal",
    },
    {
        id: "5424d2d5-d740-4c9f-adf1-8617fd885655",
        college: "Brindavan Institute of Technology and Science, Kurnool",
    },
    {
        id: "413ee82c-614b-42c0-aff3-488cb4046d1e",
        college: "Budge Budge Institute of Technology, Kolkata",
    },
    {
        id: "aef27f8f-debb-44d5-8133-401e26c04097",
        college: "BVRIT Hyderabad, Hyderabad",
    },
    {
        id: "246eeb5d-0a75-472c-a281-8f94dc65526c",
        college:
            "C K College of  Engineering & Technology (Formerly Sri Jayaram Engineering College), Cuddalore",
    },
    {
        id: "327c3ed2-c64e-42fc-95c9-30576cc52381",
        college: "C M R Institute of Technology, Bengaluru",
    },
    {
        id: "bc009666-b8cf-4e02-b3e3-002b40e3a47c",
        college:
            "C. Abdul Hakeem College of Engineering & Technology, Melvisharam",
    },
    {
        id: "e44cf2ec-ac46-48a3-bd28-86b919510911",
        college: "C. K. Pithawala College of Engg & Technology, Surat",
    },
    {
        id: "a3dfe517-74ba-408c-9dcd-12a8c5a097d9",
        college: "C. U. Shah University, Wadhwan City",
    },
    {
        id: "4bd66f15-0d5f-4d97-8346-e7c49b752e4d",
        college: "C.V. Raman Global University , Bhubaneswar",
    },
    {
        id: "f87f39e7-10a4-47b7-85a5-7e4ee9434a73",
        college: "C.A.R.E. Group of Institutions, Tiruchirappalli",
    },
    {
        id: "c5384504-6e1c-41a6-bf9f-25b0e70465f3",
        college: "Cambridge Institute of Technology, Ranchi",
    },
    {
        id: "c247607d-a8ce-4ccc-bd96-756592c93130",
        college: "Canara Engineering College, Mangaluru",
    },
    {
        id: "357d7843-2e0f-456e-a46a-356d95efd975",
        college: "Career Point University, Hamirpur",
    },
    {
        id: "4cd7878e-bd6f-4a49-8b31-6ca39f159ce3",
        college: "Central Institute of Technology, Kokrajhar",
    },
    {
        id: "b47933b8-8971-45b5-aa2c-6f0baeb19541",
        college:
            "Centurion  University  of Technology and Management, Paralakhemundi",
    },
    {
        id: "971ecdb6-b56c-4eb9-b235-6dce555290bb",
        college: "CH. DEVI LAL MEMORIAL GOVERNMENT ENGG. COLLEGE, Sirsa",
    },
    {
        id: "8645bc54-089f-4693-8c82-5becf8134adf",
        college: "Chadalawada Ramanamma Engineering College, Tirupati",
    },
    {
        id: "89a807d7-5516-4da9-ae95-fe11fcc84953",
        college: "Chaitanya Bharathi Institute of Technology, Hyderabad",
    },
    {
        id: "8e1a4c32-a0f1-465e-874c-cfa870ec210f",
        college: "CHAITANYA INSTITUTE OF TECHNOLOGY & SCIENCE, Hanmakonda",
    },
    {
        id: "ee58f4cc-66dc-446a-8cb6-77af186bc590",
        college: "Chalapathi Institute of Engineering and Technology, Guntur",
    },
    {
        id: "0b3f6e98-6b7d-4124-a0d8-f9e138daf92b",
        college: "Chandigarh College of Engineering & Technology, Chandigarh",
    },
    {
        id: "f1bafa50-bb42-47cf-b9f0-6edafd9dcb58",
        college: "Chandigarh Engg College, Sahibzada Ajit Singh Nagar",
    },
    {
        id: "32b8b8ae-8355-4bd2-95a2-58e46848ab05",
        college: "Chandigarh University, Mohali",
    },
    {
        id: "d84c593b-5754-4de0-b8df-5fb29ee14299",
        college: "Chandubhai S. Patel Institute of Technology, Changa",
    },
    {
        id: "8d3701b6-017e-4b3c-93fe-e80f040a57ce",
        college: "Chatrapati Sahuji Maharaj Kanpur University, Kanpur ",
    },
    {
        id: "b84b57f2-c6de-4da5-ac4e-c41abe5bbb2e",
        college: "CHEBROLU ENGINEERING COLLEGE, Chebrolu",
    },
    {
        id: "1130380a-9062-4158-aa96-72880095562b",
        college: "CHENNAI INSTITUTE OF TECHNOLOGY, Chennai",
    },
    {
        id: "9ab0fba7-2d77-4bc0-a7a1-2f12a9b80131",
        college: "Chettinad College of Engineering & Technology, Karur",
    },
    {
        id: "0384dc66-624e-4bed-bf61-380c77a5c3e4",
        college: "Chhatrapati Shivaji Institute of Technology Kolihapuri, Durg",
    },
    {
        id: "f8719dff-e0bc-45da-aa5a-0bdfeda7158b",
        college: "Chhotubhai Gopalbhai Patel Institute of Technology, Bardoli",
    },
    {
        id: "8f6cf9dd-0498-4392-b164-01d67dd9759d",
        college: "Chitkara University, Rajpura",
    },
    {
        id: "8896d3b4-43d8-410e-ac0a-6166f80fa2d1",
        college: "Choudhary Charan Singh University, Meerut",
    },
    {
        id: "57e833af-026d-4e05-8186-13ca59a1bccc",
        college: "Chouksey Engineering College, Bilaspur",
    },
    {
        id: "ec07a4e2-b777-4cef-91c8-6c08be9731c0",
        college: "Christ University, Bengaluru",
    },
    {
        id: "04bdfb67-7b21-47e9-8d34-ce11e40c8c73",
        college: "CMR College of Engineering & Technology, Hyderabad",
    },
    {
        id: "e3f59bb0-8c70-4da4-84f3-693bc7b43aae",
        college: "CMR Engineering College, Rangareddy",
    },
    {
        id: "6ac8d023-16fa-49f5-84d6-64396230ec95",
        college: "CMR Institute of Technology, Hyderabad",
    },
    {
        id: "66759f82-5c41-4c0c-8a30-fbf6cff64839",
        college: "CMR Technical Campus, Hyderabad",
    },
    {
        id: "d45dffb3-5784-482c-9bad-869585c1e70c",
        college:
            "Coimbatore Institute of Engineering and Technology, Coimbatore",
    },
    {
        id: "f03cc5a4-680f-49c7-9742-d82ad882344c",
        college: "Coimbatore Institute of Technology, Coimbatore",
    },
    {
        id: "f8959d62-e43a-4599-9c1a-1a4b4a80e9ad",
        college: "College of Agricultural Engineering & Technology, Hisar",
    },
    {
        id: "49c69cba-2fee-4f5d-ba19-3ee43a8560a6",
        college: "College of Engineering, Solapur",
    },
    {
        id: "adb92c3f-752f-419c-9604-2564bf5cc240",
        college: "College of Engineering & Technology, Akola",
    },
    {
        id: "8d558455-b0fa-4141-b8dc-d519c5b5e65d",
        college:
            "College of Engineering & Technology, Bhubaneswar, Bhubaneswar",
    },
    {
        id: "f97538fe-6159-427c-a59f-167782cfb8d9",
        college: "College of Engineering ,Karunagappally, Karunagappally",
    },
    {
        id: "960ddc57-95f6-4697-8fc4-c641e18b674a",
        college:
            "College of Engineering and Technology, IILM Academy of Higher Learning, GAUTAM BUDDHA NAGAR",
    },
    {
        id: "fd12e482-c7a0-4e96-b498-a4cad5b4fec1",
        college: "COLLEGE OF ENGINEERING PERUMON, Kollam",
    },
    {
        id: "26272eac-c1c9-4359-8a07-179e8ef815c8",
        college: "College of Engineering Pune, Pune",
    },
    {
        id: "175e7c07-52ea-44fa-ac6d-591c60c06a06",
        college: "College of Engineering Roorkee, Roorkee",
    },
    {
        id: "874a53f1-ab09-49f8-87d7-f99716e3d1ec",
        college: "College of Engineering Trivandrum, Thiruvananthapuram",
    },
    {
        id: "be1296df-51f8-4cae-81f9-5e6e64af5c68",
        college: "College of Engineering(A), Visakhapatnam",
    },
    {
        id: "8189f8dd-077a-481e-b1dd-92b38b9761e3",
        college: "COLLEGE OF ENGINEERING, CHERTHALA, Cherthala",
    },
    {
        id: "820c9b3f-a9a4-4b11-a2c1-97860c12cdd5",
        college: "COLLEGE OF ENGINEERING, PATHANAPURAM, Pathanapuram",
    },
    {
        id: "ad36612d-defa-4a74-93ee-6b4ab4719ea7",
        college: "College of Poultry Production and Management, Hosur",
    },
    {
        id: "89878a41-b734-4ccd-ac16-4cea85a30abe",
        college: "College of Technology and Engineering, Udaipur",
    },
    {
        id: "1b3b8485-e136-460d-be03-5c1a4d5a0f72",
        college: "CSMSS Chh. Shahu College of Engineering, Aurangabad",
    },
    {
        id: "1b879c49-c92e-476e-8b6d-e9d7582efaa8",
        college: "CVR College Of Engineering, Ibrahimpatan",
    },
    {
        id: "ab65d2b3-4ac8-4448-8d2b-dd4010e0a5d8",
        college: "D. N. R. College of Engineering & Technology, West Godavari",
    },
    {
        id: "b490fb67-aa43-496b-bfff-bedde439fb68",
        college: "D. Y. Patil College of Engineering & Technology, Kolhapur",
    },
    {
        id: "3ca284d6-3149-4082-bead-a48cea4bfb23",
        college:
            "D. Y. Patil Education Society, D.Y. Patil Technical Campus, Faculty of Engineering, kolhapur",
    },
    {
        id: "84f8ad5e-e50e-40b5-b899-e086e9b830b9",
        college:
            "D. Y. Patil Pratishthans D.Y. Patil College of Engineering, Pune",
    },
    {
        id: "ff4a6055-cd4c-4499-9b87-6984eebc9ff0",
        college:
            "D.K.T.E.SOCIETYs TEXTILE AND ENGINEERING INSTITUTE, ICHALKARANJI, Ichalkaranji",
    },
    {
        id: "6ad7cf3f-a3ab-4db2-bb0b-ad3d863ee2fa",
        college:
            "Daita Madhusudana Sastry Sri Venkateswara Hindu College of Engineering, Machilipatnam",
    },
    {
        id: "18e978a7-1b19-4590-a337-836a3ec95a04",
        college: "DARSHAN INSTITUTE OF ENGINEERING & TECHNOLOGY, Rajkot",
    },
    {
        id: "d47ad497-1c18-4632-84d7-16de95c2d4fc",
        college:
            "Datta Meghe Institute of Engineering Technology and Research, Wardha",
    },
    {
        id: "10624e77-65a9-4bd2-ae0f-6c33e365b622",
        college: "Dayalbagh Educational Institute, Agra",
    },
    {
        id: "25ec1b5b-f912-4956-b18a-106c6e1fddd8",
        college:
            "Dayananda Sagar Academy of Technology & Management Technical Campus, Bengaluru",
    },
    {
        id: "0f45f466-9b16-487a-b26d-387e746fe5e4",
        college: "Dayananda Sagar College of Engineering, Bengaluru",
    },
    {
        id: "ec2ec1e9-f68b-46c8-90f6-9cc3ac3b961c",
        college: "Dayananda Sagar University, Bengaluru",
    },
    {
        id: "b6b68441-70fd-41da-8cea-16c782aee6be",
        college:
            "Deenbandhu Chhotu Ram University of Science & Technology, Sonipat",
    },
    {
        id: "77cc6e6a-0174-4f19-a3fa-1a77df853b4f",
        college: "Defence Institute of Advanced Technology, Pune",
    },
    {
        id: "3e0064c5-971d-4e0f-bcfe-8316db71e751",
        college: "DELHI INSTITUTE OF TOOL ENGINEERING, Delhi",
    },
    {
        id: "3a50eb94-8718-46eb-a3ef-ede83d0b9b9b",
        college: "Delhi Technological University, New Delhi",
    },
    {
        id: "7377fae5-95af-4fd8-9e37-540befa62380",
        college:
            "Deogiri Technical Campus for Engineering and Management Studies, Aurangabad",
    },
    {
        id: "8f6a1f16-27ea-4d0d-bb72-3dad21d758e4",
        college: "Desh Bhagat University, Gobindgarh",
    },
    {
        id: "4f0c94f1-e70f-486f-a363-09db1c9c7405",
        college: "Devi Ahilya Vishwavidyalaya, Indore",
    },
    {
        id: "efdb30ca-23c2-48d8-941b-ea8a10a64e2e",
        college:
            "Devineni Venkata Ramana & Dr. Hima Sekhar MIC College of Technology, Krishna",
    },
    {
        id: "6afd5fa8-0d89-4788-b5a0-ebcfa3d64dac",
        college:
            "Dhamangaon Education Societys College of Engineering & Technology,Dhamangaon Rly., Dhamangaon rly",
    },
    {
        id: "6221cec5-d18b-498c-98b5-19e0313bd887",
        college: "Dhanalakshmi Srinivasan College of Engineering, Coimbatore",
    },
    {
        id: "dee398df-7575-4357-86f4-e29490888b74",
        college:
            "DHANALAKSHMI SRINIVASAN COLLEGE OF ENGINEERING AND TECHNOLOGY, Mamallapuram",
    },
    {
        id: "25879c56-c284-4046-8279-ea83f4d09d70",
        college: "Dharmsinh Desai University, Nadiad",
    },
    {
        id: "3da03fd1-5b8d-4b44-9ed4-d5d0da6e6850",
        college:
            "Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar",
    },
    {
        id: "2b7996de-c191-4d2e-855c-0ee57419985f",
        college:
            "DHOLE PATIL EDUCATION SOCIETY'S, DHOLE PATIL COLLEGE OF ENGINEERING., Pune",
    },
    {
        id: "9ac7cff5-5590-47c8-9fd2-cc26faa8259f",
        college:
            "DIBRUGARH UNIVERSITY INSTITUTE OF ENGINEERING AND TECHNOLOGY, Dibrugarh",
    },
    {
        id: "259c8bcf-e48d-442a-9156-5f46d5a14e36",
        college: "DIT University, Dehradun",
    },
    {
        id: "d776e712-b050-4fcf-943d-13d9cee943fa",
        college: "DON BOSCO COLLEGE OF ENGINEERING, FATORDA, MARGAO, South Goa",
    },
    {
        id: "abb8ea92-7ab7-496f-89b2-e997334d729c",
        college: "Don Bosco Institute Of Technology - Mumbai, Mumbai",
    },
    {
        id: "5a081051-dd9d-40c8-87f2-5f573610df6f",
        college: "Don Bosco Institute of Technology, BANGALORE, Bengaluru",
    },
    {
        id: "43f52462-d624-44e6-a764-4505d8c55c75",
        college:
            "DR LANKAPALLI BULLAYYA COLLEGE OF ENGINEERING (FOR WOMEN), Visakhapatnam",
    },
    {
        id: "f76087a9-e496-491a-8fbf-be9cbb61e44f",
        college: "Dr. Ambedkar Institute of Technology, Bengaluru",
    },
    {
        id: "d762e481-0862-4f02-a88b-946af2a0de4f",
        college: "Dr. B. R. Ambedkar Institute of Technology, South Andaman",
    },
    {
        id: "347f719e-85a7-42d2-bd4f-9ed33b2f7356",
        college:
            "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
    },
    {
        id: "f92e7039-dac4-42ab-912c-2c53842561a4",
        college: "Dr. B.C. Roy Engineering College, Durgapur, Barddhaman",
    },
    {
        id: "f775cd32-d9df-47be-b8e5-81f0d69a4444",
        college:
            "Dr. Babasaheb Ambedkar College of Engineering and Research,, Nagpur",
    },
    {
        id: "b5409411-41fd-4289-b092-4e413cd27a7c",
        college: "Dr. Babasaheb Ambedkar Technological University, Raigarh",
    },
    {
        id: "0b005c31-8b77-4ada-b98f-6ca37cf337df",
        college:
            "Dr. D. Y. Patil Educational Enterprises Charitable Trust's Dr. D. Y. Patil Group of Institutions Dr. D. Y. Patil School of Engineering, Pune",
    },
    {
        id: "d25346ba-3980-40eb-a98d-4c3782a296b9",
        college:
            "Dr. D. Y. Patil Institute of Engineering, Management and Research, Pune",
    },
    {
        id: "a92188ce-d74a-4efc-9dde-cb3b5ed3f2ea",
        college: "Dr. D. Y. Patil Institute of Technology, Pune",
    },
    {
        id: "3e47051b-5152-4499-b5ed-193fa2684b41",
        college:
            "Dr. J. J. Magdum College of  Engineering, JAYSINGPUR, Kolhapur",
    },
    {
        id: "ecb7489d-e7c9-430a-b7c8-a75e30212d63",
        college: "Dr. K. V. Subba Reddy Institute of Technology, Kurnool",
    },
    {
        id: "7c1a7179-f679-48fb-b675-ce10d503fa62",
        college:
            "Dr. Mahalingam College of Engineering and Technology, Pollachi",
    },
    {
        id: "7637f6ce-5a04-40e9-951a-dfeeba6162f5",
        college: "Dr. N. G. P. Institute of Technology, Coimbatore",
    },
    {
        id: "5719eab5-1859-4220-8b3e-17e7854b5f57",
        college:
            "DR. S. & S. S. GHANDHY GOVERNMENT ENGINEERING COLLEGE, SURAT., Surat",
    },
    {
        id: "e6594fdf-91b4-47fb-a523-76c344a73edb",
        college:
            "Dr. Samuel George Institute of Engineering & Technology, Markapur",
    },
    {
        id: "3990e5dd-6a95-4e3a-85ed-844d5d1d1daa",
        college: "DR. SUDHIR CHANDRA SUR DEGREE ENGINEERING COLLEGE, Kolkata",
    },
    {
        id: "0cbcb5b4-48d6-45b5-8f7c-96f6bd4bca7c",
        college: "Dr. Vishwanath Karad MIT World Peace University, Pune",
    },
    {
        id: "6926a027-e92d-4466-9084-400f5dcc2fb4",
        college: "Dream Institute of Technology, Kolkata",
    },
    { id: "db9c5bcb-391a-49e3-8e53-11b6a96c92c5", college: "DRIEMS, CUTTACK" },
    {
        id: "41937594-2d3d-43b7-895c-6f34f7507b3b",
        college: "Dronacharya College of Engineering, Gurgaon",
    },
    {
        id: "5aa4680b-e975-4475-94a8-73f1efbaf4c2",
        college: "Dronacharya Group of Institutions, Greater Noida",
    },
    {
        id: "dcf5601a-4132-4a90-a0d4-7f755f314557",
        college:
            "Durgapur Institute of Advanced Technology and Management 155, Barddhaman",
    },
    {
        id: "566adb2b-da64-496a-89c1-207bdf01cf55",
        college: "E.G.S. PILLAY ENGINEERING COLLEGE, Nagapattinam",
    },
    {
        id: "cf5e87a2-7789-4f29-9ce3-650ee7d7f964",
        college: "East West Institute of Technology, Bengaluru",
    },
    {
        id: "7af602e0-3c69-4744-ad86-820b5793acd1",
        college: "Easwari Engineering College, Chennai",
    },
    {
        id: "5ce2e9fb-b31d-4085-a2b2-ae53fa04b6f0",
        college: "Engineering College,Ajmer, Ajmer",
    },
    {
        id: "d5b821b3-0079-4f92-9ba0-469a6fb3223a",
        college:
            "Erode Builder Educational Trust'S Group of Institutions, Kangeyam",
    },
    {
        id: "102542cb-5a15-4030-9d43-37b68df95be7",
        college: "Erode Sengunthar Engineering College, Erode",
    },
    {
        id: "47ae2dc3-748e-43fd-99b2-0c742ba48a2e",
        college: "Eswar College of Engineering, Guntur",
    },
    {
        id: "93b33a9e-a6e9-4b70-b8ae-d71b195e8a10",
        college:
            "Everest Education Society Sanchalit, College of Engineering, Aurangabad",
    },
    {
        id: "c03668d1-98bf-480f-b70d-480d962ff14d",
        college: "EXCEL ENGINEERING COLLEGE, Pallakapalayam",
    },
    {
        id: "51a972d1-b052-4934-ac11-464be1758265",
        college:
            "FACULTY OF ENGG., MARWADI EDU. FOUNDATION GROUP OF INSTITUTIONS, RAJKOT 057, Rajkot",
    },
    {
        id: "fe83828e-d0f5-433e-b5d6-709e1b8599cd",
        college: "Finolex Academy of Management and Technology, Ratnagiri",
    },
    {
        id: "f3733f75-56d2-4100-8999-b1878ca3813b",
        college: "Fr. C. Rodrigues Institute of Technology, Navi Mumbai",
    },
    {
        id: "e7de1358-d2ea-49ef-bdc6-5aef911a8460",
        college: "Fr. Conceicao Rodrigues College of Engineering, Mumbai",
    },
    {
        id: "28ee390d-3ae5-44d9-9e40-00874ec64b32",
        college: "FRANCIS XAVIER ENGINEERING COLLEGE, Tirunelveli",
    },
    {
        id: "c735cc73-6a14-41c2-b4c3-9ae35b0aa1e2",
        college: "Future Institute of Engineering and Management, Kolkata",
    },
    {
        id: "21b51902-69e5-44ac-af86-32012d20326b",
        college:
            "G H PATEL COLLEGE OF ENGINEERING & TECHNOLOGY, Vallabh Vidyanagar",
    },
    {
        id: "917e0fe7-8c96-4bf2-a752-bccde421e9df",
        college: "G M Institute of Technology, DAVANGERE, DAVANGERE",
    },
    {
        id: "e7be49a1-1283-4060-af8c-7e75958a5943",
        college: "G. B. Pant Govt. Engineering College, Delhi",
    },
    {
        id: "50d223c0-0af0-4c5b-bfbb-c8dadbd5c32a",
        college: "G. D. Goenka University, Gurgaon",
    },
    {
        id: "66188a5a-be91-484b-8b9d-5c24c51b4f4f",
        college:
            "G. H. RAISONI ACADEMY OF ENGINEERING & TECHNOLOGY, NAGPUR, Nagpur",
    },
    {
        id: "a7b597d7-1836-4379-8248-6177a30c4b31",
        college: "G. H. Raisoni College of Engineering, Nagpur",
    },
    {
        id: "e4c35fab-a901-4c68-9b83-680863e57360",
        college: "G. H. Raisoni Institute of Engineering & Management, Jalgaon",
    },
    {
        id: "64452123-4979-401d-a1ac-d35c245156c7",
        college: "G. H. Raisoni Institute of Engineering & Technology, Pune",
    },
    {
        id: "626b7681-5ce5-4779-8178-c4a77c192b5c",
        college: "G. I. D. C. Degree Enginering College, Abrama",
    },
    {
        id: "5180b319-bd07-4e8e-95e6-0ccdd62f6547",
        college: "G. K. M. College of Engineering and Technology, Chennai",
    },
    {
        id: "925325f1-741a-42e6-886c-02e0350c5772",
        college: "G. L. A. University, Mathura",
    },
    {
        id: "1f738251-f38c-4b15-ac86-c9ef0784d19e",
        college: "G. M. R. Institute of Technology, Rajam",
    },
    {
        id: "8957aba3-cfd0-49ec-bbe7-da3c9add97a5",
        college: "G. Madegowda Institute of Technology, Mandya",
    },
    {
        id: "c69131ce-3e17-459e-a102-56c9ebaa1374",
        college:
            "G. Narayanamma Institute of Technology & Science for Women, Hyderabad",
    },
    {
        id: "0eef5e4b-26c4-4f17-bbed-69f421d7bf7f",
        college: "G. Pullaiah College of Engineering and Technology, Kurnool",
    },
    {
        id: "560fe519-bbf5-4712-8ffb-144e324015ac",
        college:
            "G. S. S. S. Institute of Engineering & Technology for Women, Mysore",
    },
    {
        id: "d035c654-499c-4720-be12-5989c3cddfb8",
        college:
            "G.L.BAJAJ INSTITUTE OF TECHNOLOGY AND MANAGEMENT, Greater Noida",
    },
    {
        id: "57e878a1-a39d-4f3c-829b-23c0fc074206",
        college: "G.Pulla Reddy Engineering College, Kurnool",
    },
    {
        id: "aefb67cf-87a6-44ba-8763-3499fa0b8a6e",
        college: "Galgotias College of Engineering & Technology, Greater Noida",
    },
    {
        id: "548f5445-df9d-4883-b836-970b456aefa9",
        college: "Galgotias University, Gautam Budh Nagar",
    },
    {
        id: "ba969233-f761-424e-80d9-ef135be38a5f",
        college: "Gandhi Engieering College (GEC), Bhubaneswar",
    },
    {
        id: "65791bed-bb4a-4d89-9dcd-b2dd5f36c7b7",
        college:
            "Gandhi Institute for Education and Technology (GIET), Khurda, Bhubaneswar, Bhubaneswar",
    },
    {
        id: "4a61c180-8011-46ca-b6cd-03e118fde667",
        college:
            "GANDHI INSTITUTE FOR TECHNOLOGICAL ADVANCEMENT (GITA), BHUBANESWAR, Bhubaneswar",
    },
    {
        id: "bffdfa00-9933-4594-bed6-a4a2a6c3e166",
        college: "Gandhi Institute of Engineering and Technology, Gunupur",
    },
    {
        id: "26b882a8-eeeb-46fd-9b7b-ea01281da629",
        college: "Ganga Institute of Technology and Management, Kablana",
    },
    {
        id: "01b6e7b5-cf38-47da-b850-bb9705f2fa23",
        college: "Ganpat University, Ganpat Vidyanagar",
    },
    {
        id: "3002d22e-0091-448d-82ef-1b43ced79df3",
        college: "Gates Institute of Technology, Gooty",
    },
    {
        id: "99dcac4b-2346-4b9d-b754-d290d3225dc6",
        college: "GATEWAY INSTITUTE OF ENGINEERING & TECHNOLOGY, Sonepat",
    },
    {
        id: "2a9fd36a-e959-40df-9638-422db43a11a3",
        college: "Gaya College of Engineering, Gaya",
    },
    {
        id: "8f76c294-f305-4617-ab80-766a9a3a6db4",
        college:
            "Gayatri Vidya Parishad College for Degree and P.G Courses (Autonomous), Visakapatnam",
    },
    {
        id: "dc1ea273-5011-49fd-b71f-4f3f7264ed45",
        college: "Gayatri Vidya Parishad College of Engineering, Visakhapatnam",
    },
    {
        id: "f4f8d033-e982-4ba2-9f61-fd85b9c2cfb0",
        college:
            "Gayatri Vidya Parishad College of Engineering for Women, Visakhapatnam",
    },
    {
        id: "7e7d863a-0b7f-415b-9ffa-a8b1a33bc4e2",
        college: "Geetanjali Institute of Technical Studies, Udaipur",
    },
    {
        id: "40c9cc2c-8480-496c-83ed-51607c3b205d",
        college:
            "GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY, Rangareddy",
    },
    {
        id: "5cf5baff-8685-4f16-b488-8f876757dc9d",
        college: "GEETHANJALI INSTITUTE OF SCIENCE AND TECHNOLOGY, Nellore",
    },
    {
        id: "75918e0c-94fe-44cf-840b-62d617f5433d",
        college: "Gharda Foundations Gharda Institute of Technology, Ratnagiri",
    },
    {
        id: "238c7e98-94b4-4dd7-836d-9c14087b97b7",
        college:
            "GIANI ZAIL SINGH CAMPUS COLLEGE OF ENGINEERING & TECHNOLOGY BATHINDA, Bathinda",
    },
    {
        id: "10dbfa28-c824-4e93-855b-e1238c31d36c",
        college:
            "Girijananda Chowdhury Institute of Management & Technology, Kamrup",
    },
    {
        id: "1fe9b7a2-33b3-4aeb-bef6-8f9e680c4728",
        college: "Global Academy of Technology, Bengaluru",
    },
    {
        id: "c88aa047-cc87-4c47-8d66-2c74dd379d14",
        college: "Global Institute of Technology, Jaipur",
    },
    {
        id: "594a4a0b-a514-4013-9e74-e3f7bce1ebe8",
        college:
            "Global Research  Institute of  Management. & Technology, Yamuna Nagar",
    },
    {
        id: "ac52c437-e361-4fa1-871b-9964bbec22c3",
        college: "Glocal University, Saharanpur",
    },
    {
        id: "1214e370-b1d4-4bf6-9500-7c3fbdde2172",
        college: "Gnanamani College of Technology, Namakkal",
    },
    {
        id: "a565916f-5eb7-4b52-a799-648119a2c440",
        college: "Goa College of Engineering (Government of Goa), Ponda",
    },
    {
        id: "b6bcf094-2b0e-47d7-81a8-b9219a70dd07",
        college: "Godavari Institute of Engineering & Technology, Rajahmundry",
    },
    {
        id: "3ffc3a36-5e05-44ed-a315-2ec34410b40f",
        college: "Gogte Institute of Technology, Belgaum",
    },
    {
        id: "e43da329-381c-47b7-a789-ef67795644f8",
        college: "Gojan School of Business and Technology, Chennai",
    },
    {
        id: "3b8b7d86-c6fa-4b55-910a-f1bc7fd9da8d",
        college:
            "Goka Raju Ranga Raju Institute of Engineering & Technology, Hyderabad",
    },
    {
        id: "e9ca0809-e5be-4b2a-9e2f-156c14c8ffd4",
        college: "Gokula Krishna College of Engineering, Sullurupeta",
    },
    {
        id: "2dcab8fb-7362-4d69-853e-7a1514d9423b",
        college:
            "Goutami Institute of Technology & Management for Women, Proddatur",
    },
    {
        id: "7fb4d234-291f-45a7-b202-8faa08e08d8e",
        college: "Government  Engineering College, Haveri",
    },
    {
        id: "1891816b-0a46-440a-b11d-5a68d3991916",
        college: "Government College of Engineering, Kannur",
    },
    {
        id: "313d48e2-e81a-466e-a225-a20be596f810",
        college: "Government College of Engineering, Karad",
    },
    {
        id: "acf6c230-d7f4-4c24-976f-c6c1735faf77",
        college: "Government College of Engineering, Theni",
    },
    {
        id: "475bb28a-bf88-404e-b58a-7e3dd48e91cf",
        college: "Government College of Engineering, Krishnagiri",
    },
    {
        id: "c2e70bb2-279a-4686-a732-52703c6110e8",
        college: "Government College of Engineering, Salem",
    },
    {
        id: "686a96df-0aa4-4635-8aca-4b0d7e394028",
        college: "Government College of Engineering, KEONJHAR",
    },
    {
        id: "bffac3dd-bfa8-4ebb-a06d-c001a7403053",
        college: "Government College of Engineering, Kalahandi",
    },
    {
        id: "3c86de8e-fb73-459e-9411-34cd2c9a7a97",
        college:
            "Government College of Engineering & Ceramic Technology, Calcutta-10",
    },
    {
        id: "b4848d03-8cad-4477-ae53-354fc7b60de0",
        college: "Government College of Engineering & Technology, Jammu",
    },
    {
        id: "a4e31eea-9304-4271-a8d3-44a6cc7b13b7",
        college:
            "Government College of Engineering (Academic Autonomous), Aurangabad",
    },
    {
        id: "91ca411f-8617-412b-8477-8234098aac0d",
        college: "GOVERNMENT COLLEGE OF ENGINEERING ,JALGAON(M.S.), Jalgaon",
    },
    {
        id: "077beafd-cbfc-4336-bb04-fe96dec938c3",
        college: "Government College of Technology, Coimbatore",
    },
    {
        id: "22246548-97ba-4188-be7f-0ce15d87375e",
        college: "Government Engineering College, JABALPUR",
    },
    {
        id: "de14b665-1326-4ffb-9305-35e4f136ecfb",
        college: "Government Engineering College, Thrissur",
    },
    {
        id: "0e8c2aa4-538a-42ed-afb4-f62ceffce991",
        college: "Government Engineering College, Godhra",
    },
    {
        id: "e9327145-2c0e-419b-820a-8520806d7503",
        college: "Government Engineering College, Rajkot",
    },
    {
        id: "bc2f30a2-e5b7-41b8-9b20-60a9a2ac41e0",
        college: "Government Engineering College, Bharuch",
    },
    {
        id: "80581bda-bbb0-4a8a-9bd3-092af773190d",
        college: "Government Engineering College, Gandhinagar",
    },
    {
        id: "4c0e4533-8769-40b6-92a3-dafbcbc57de0",
        college: "GOVERNMENT ENGINEERING COLLEGE BILASPUR, Bilaspur",
    },
    {
        id: "ee1702c0-8161-47ac-bce4-d1b5074dc921",
        college:
            "GOVERNMENT ENGINEERING COLLEGE SREEKRISHNAPURAM, Sreekrishnapuram",
    },
    {
        id: "0100ebdb-02c4-4638-98bc-5eded0093395",
        college: "GOVERNMENT ENGINEERING COLLEGE, MODASA, Modasa",
    },
    {
        id: "bd6b5516-5109-4c3d-aca2-53c16a795cc0",
        college: "Govt. Engineering College, Trivandrum",
    },
    {
        id: "f914e3d6-5341-4478-9e89-18eea9d3a4b7",
        college: "GOVT. ENGINEERING COLLEGE, HASSAN, Hassan",
    },
    {
        id: "f7fe0ebe-b43c-4207-a97f-2c66b162e7da",
        college: "GOVT. ENGINEERING COLLEGE, KOZHIKODE, Kozhikode",
    },
    {
        id: "87769766-c8fa-491a-970c-de15b685ddf2",
        college: "Govt. Engineering College,Jhalawar, Jhalawar",
    },
    {
        id: "bc6d5469-fddb-4056-ad99-ff35c6195322",
        college: "Graphic Era University, Dehradun",
    },
    {
        id: "b3cf89ee-ade3-4ce2-968a-f7c9cf03dff9",
        college:
            "Greater Noida Institute of Technology (Engineering Institute), Greater Noida",
    },
    {
        id: "5874e707-666b-4e39-b83e-721834e46929",
        college:
            "Group of Institutions College of Engineering, A-p. Kashti, Tal. Shrigonda,Dist.Ahmednagar, Kashti",
    },
    {
        id: "2ee86140-e4b2-4365-a4b6-be07a5f609df",
        college: "Gudlavalleru Engineering College, Gudlavalleru",
    },
    {
        id: "944d6f99-8b90-4a1e-9162-a1379cd83301",
        college: "Gujarat Technological University, Ahmedabad",
    },
    {
        id: "e449e777-2c3b-4508-ae7a-68a23db73cbe",
        college: "Gulzar Group of Institutions, Khanna",
    },
    {
        id: "1ffff4b5-77aa-46a9-9cff-2ab468374ff2",
        college: "Guru Ghasidas Vishwavidyalaya, Bilaspur",
    },
    {
        id: "33f458b3-c653-4e89-8f65-ca4c56c1d24d",
        college:
            "Guru Gobind Singh College of Engineering and Research Centre, Nashik, Nashik",
    },
    {
        id: "5cabab2f-467c-4b19-880f-ddf3be1c25d1",
        college: "Guru Gobind Singh Indraprastha University, New Delhi",
    },
    {
        id: "3abb6957-3159-4004-8186-8eaca0f7e0b3",
        college: "Guru Jambheshwar University of Science and Technology, Hisar",
    },
    {
        id: "1a77b5f2-8308-4f86-977c-0d336af263e4",
        college: "Guru Nanak Dev Engineering College, Ludhiana",
    },
    {
        id: "4f21d809-ac81-4086-87f8-7ec7e19b72e0",
        college: "GURU NANAK INSTITUTE OF TECHNOLOGY, Ibrahimpatnam",
    },
    {
        id: "c8cefc82-988a-4ab7-a3d9-545fa85e4aa4",
        college: "Guru Nanak Institutions Technical Campus, Ibrahimpatnam",
    },
    {
        id: "4ed1f0e9-aa2a-48fc-bb78-61416412a970",
        college:
            "Gurunanak Institute Of Technology, North Twenty Four Parganas",
    },
    {
        id: "f6fd9ece-cd1f-46e0-b535-10d33623fd92",
        college: "GYAN GANGA COLLEGE OF TECHNOLOGY, JABALPUR, Jabalpur",
    },
    {
        id: "240fc2ee-32df-4b67-8cfa-dcdf0ca8dcf6",
        college: "Gyan Ganga Institute of Technology & Sciences, Jabalpur",
    },
    {
        id: "0be87854-6105-4759-a683-2cff1790e67a",
        college:
            "H. V. P. Mandal's College of Engineering & Technology, AMRAVATI",
    },
    {
        id: "e0fc18f3-eabc-4e8a-9af5-d1b866570f0c",
        college: "Haldia Institute of Technology, Haldia",
    },
    {
        id: "2787db9b-71c2-4c2b-bf83-d1ba54541de7",
        college: "Harcourt Butler Technical University, Kanpur Nagar",
    },
    {
        id: "96d13e04-a683-4d25-9e22-9b4b4d4fdf6f",
        college: "Heritage Institute of Technology, Kolkata",
    },
    {
        id: "ab899ea5-7e94-4ba4-be2f-bf550d040e80",
        college: "Himachal Pradesh University, Shimla",
    },
    {
        id: "cde8daad-89a1-4113-9cf9-7a8e97cc4ba9",
        college:
            "Himalayan Institute of Engineering & Technology, Sadhoura Road, Kala  Amb. Distt Sirmour, Kala-Amb",
    },
    {
        id: "353efdf6-443a-4c36-b48f-15dde489c4b2",
        college:
            "Hindustan Institute of Technology  and Science (HITS), Chennai",
    },
    {
        id: "c76a99c7-8f30-4484-9a0d-b06932f7d353",
        college: "Hindusthan College of Engineering and Technology, Coimbatore",
    },
    {
        id: "45246239-3276-429a-88aa-e29c342dea67",
        college: "Hindusthan Institute of Technology, Coimbatore",
    },
    {
        id: "62935e41-5e8c-438a-841d-c055549c957c",
        college: "HIRASUGAR INSTIUTE OF TECHNOLOGY, Nidasoshi",
    },
    {
        id: "d62f112e-da55-424c-b96b-78cbc88ea0ab",
        college: "Hi-Tech Institute of Technology, Aurangabad",
    },
    {
        id: "1be90ec2-1add-4be1-937f-518d73765188",
        college: "HKE's SLN College of Engineering, Raichur",
    },
    {
        id: "cfe133b4-4bc6-402d-8d5d-13927ca4d99f",
        college: "HMR Institute of Technology & Management, North West",
    },
    {
        id: "013d40fe-3381-4c7a-a697-0d9e468b32fb",
        college: "Hyderabad Institute of Technology & Management, Rangareddy",
    },
    {
        id: "938c8387-fa70-4012-b6fb-f79122bb5fe3",
        college: "I. E. S. College of Technology, Bhopal",
    },
    {
        id: "12947fc9-1d68-495c-a1b9-e3d9f9c6525d",
        college: "I. F. E. T. College of Engineering, Viluppuram",
    },
    {
        id: "594f1cd3-b75c-42af-8d62-6a96908e0b90",
        college: "I.T.S ENGINEERING COLLEGE, Greater Noida",
    },
    {
        id: "212645d0-6e4a-4215-af5f-923d4a0af35f",
        college: "ICFAI Foundation for Higher Education, Hyderabad",
    },
    {
        id: "8733225d-96f5-496b-8609-f3cce55f8a6e",
        college: "ICL Institute of Engineering & Technology, Shahzadpur",
    },
    {
        id: "d6c3dc76-8047-48cb-a328-a8dde049e4fb",
        college: "IIMT College of Engineering, Greater Noida",
    },
    {
        id: "959f373b-cf2d-4af0-a509-6793da5d13b4",
        college: "IIMT ENGINEERING COLLEGE, MEERUT , Meerut",
    },
    {
        id: "be25f5d0-d1a5-4c2d-b83c-e61e56b7e34c",
        college: "IMS ENGINEERING COLLEGE, Ghaziabad",
    },
    {
        id: "8a6d6370-bd3c-487a-93ad-29c9d5f1a4b5",
        college: "Inderprastha Engineering College, Ghaziabad",
    },
    {
        id: "8c6866d0-a593-4ec1-bfb0-03ec6e0aaf7b",
        college:
            "Indian Institute of  Information Technology and Management-Kerala (IIITM-K), Thiruvananthapuram",
    },
    {
        id: "c3f2241f-b07b-4156-836c-0e3101b38f61",
        college: "INDIAN INSTITUTE OF CARPET TECHNOLOGY, BHADOHI",
    },
    {
        id: "66dbcfd6-c67b-4fc3-87a7-7c747d7e88c6",
        college:
            "Indian Institute of Engineering Science and Technology, Shibpur",
    },
    {
        id: "2b57b299-9cd0-4e8f-bd29-10b4dd41c08d",
        college:
            "Indian Institute of Food Processing Technology (IIFPT), Thanjavur",
    },
    {
        id: "e87fa5a2-1246-470f-944f-803980504cf3",
        college:
            "Indian Institute of Information Technology Allahabad, Prayagraj (Allahabad)",
    },
    {
        id: "e803ca93-e339-440e-abdf-e4b4c82afc3e",
        college:
            "Indian Institute of Information Technology Design & Manufacturing Jabalpur, Jabalpur",
    },
    {
        id: "105256db-75a8-4ce5-9814-08986c2154e9",
        college:
            "Indian Institute of Information Technology Guwahati, Guwahati",
    },
    {
        id: "f328b05f-557f-41f3-ad6b-90471c75d6be",
        college:
            "Indian Institute of Information Technology, Design & Manufacturing, Chennai",
    },
    {
        id: "edac8946-382e-4e3c-ad0a-50d8f96cc190",
        college:
            "Indian Institute of Space Science and Technology, Thiruvananthapuram",
    },
    {
        id: "e5f530cc-c048-476b-b6db-b33fdc7f4cc0",
        college: "Indian Institute of Technology (BHU) Varanasi, Varanasi",
    },
    {
        id: "ad3f7ca8-ef22-43d9-83c1-b29b79e5f399",
        college:
            "Indian Institute of Technology (Indian School of Mines), Dhanbad",
    },
    {
        id: "f1550c35-8ff2-452e-9b5e-777b1a1449b8",
        college: "Indian Institute of Technology Bhubaneswar, Bhubaneswar",
    },
    {
        id: "9e7db252-2ff8-45ff-b3b8-846fb60191c3",
        college: "Indian Institute of Technology Bombay, Mumbai",
    },
    {
        id: "2452ffe9-bab7-4ab9-bb58-f8e1c112b2bb",
        college: "Indian Institute of Technology Delhi, New Delhi",
    },
    {
        id: "c737bf14-bed6-4b2c-94b3-de5f156fdef1",
        college: "Indian Institute of Technology Gandhinagar, Gandhinagar",
    },
    {
        id: "bdfa85af-241c-4e3b-a520-37a133c7f1c9",
        college: "Indian Institute of Technology Guwahati, Guwahati",
    },
    {
        id: "b95c723b-61b0-4c85-a31a-cfd1237e5c5a",
        college: "Indian Institute of Technology Hyderabad, Hyderabad",
    },
    {
        id: "9ccc980b-6a11-4cb2-9286-323dd409fb76",
        college: "Indian Institute of Technology Indore, Indore",
    },
    {
        id: "9f980ffe-e6b7-4884-854b-fbb07dc677f4",
        college: "Indian Institute of Technology Jodhpur, Jodhpur",
    },
    {
        id: "aa2dc2fc-26f1-4438-ad29-d1b0f74ebdda",
        college: "Indian Institute of Technology Kanpur, Kanpur",
    },
    {
        id: "b76019ef-ab0d-4f6b-b6cb-d4e196ce04a3",
        college: "Indian Institute of Technology Kharagpur, Kharagpur",
    },
    {
        id: "937e4e2f-3c4f-4c99-a3de-e67452f61687",
        college: "Indian Institute of Technology Madras, Chennai",
    },
    {
        id: "c10421ea-3ee9-4542-bfe2-6e0c614624ee",
        college: "Indian Institute of Technology Mandi, Mandi",
    },
    {
        id: "ce5c1224-b26d-4d44-8e9c-58a4dd6681bc",
        college: "Indian Institute of Technology Patna, Patna",
    },
    {
        id: "36370157-8b29-4bf1-ab84-e970d292ae1f",
        college: "Indian Institute of Technology Roorkee, Roorkee",
    },
    {
        id: "d3f4d996-6795-49d6-9642-c8fbe7e2e3da",
        college: "Indian Institute of Technology Ropar, Rupnagar",
    },
    {
        id: "3c5e42d4-707e-4692-8b2c-926ade22232e",
        college: "Indira Gandhi Delhi Technical University for Women, Delhi",
    },
    {
        id: "fd53fdd4-e851-4268-8298-1689c5cbd2bb",
        college:
            "Indira Gandhi Institute of Technology (IGIT), Sarang, Dhenkanal",
    },
    {
        id: "68398915-818f-484d-b4c3-87733b9af5ac",
        college: "Indore Institute of Science and Technology, Indore",
    },
    {
        id: "9db81ec4-85b6-4ae9-b974-3bfdf2770dd7",
        college:
            "Indraprastha Institute of Information Technology Delhi, New Delhi",
    },
    {
        id: "15b84233-943e-49f3-80e9-272f42cd72ef",
        college: "Institute of Aeronautical Engineering, Hyderabad",
    },
    {
        id: "adad2326-d4cb-44ee-87e5-bb0bf5e6a987",
        college: "Institute of Chemical Technology, Mumbai",
    },
    {
        id: "91d8210f-2b35-41ee-955f-058e2cdf9328",
        college: "Institute of Engg. & Tech, Bhaddal, Ropar",
    },
    {
        id: "58bad197-60b5-4a97-80c1-aa5cb68a55ab",
        college: "Institute of Engineering & Management, Kolkata",
    },
    {
        id: "aa11006a-ebb3-4ee5-93d8-e5409559b75c",
        college: "Institute of Food and Dairy Technology, Chennai",
    },
    {
        id: "2d90934b-05d4-4792-b95b-77ba4a45c6ce",
        college:
            "Institute of Infrastructure Technology Research and Management (IITRAM), Ahmedabad",
    },
    {
        id: "9e85f9d2-b2fb-46a5-a805-8d7ee2b75e85",
        college: "Institute of Road and Transport Technology, Erode",
    },
    {
        id: "cdeda64f-92dd-4586-8ed4-f0fae264a8c1",
        college: "Integral University, Lucknow",
    },
    {
        id: "45fd3692-c775-464f-805c-dd1e9de7e627",
        college:
            "International Institute of Information Technology  (I?IT), Pune",
    },
    {
        id: "beb18243-5f44-43fa-be30-10a85e0998e1",
        college:
            "International Institute of Information Technology Bangalore, Bengaluru",
    },
    {
        id: "697619eb-de98-45a2-9954-87715b341e31",
        college:
            "International Institute of Information Technology Bhubaneswar, Bhubaneswar",
    },
    {
        id: "1c04908d-9e9d-48ee-8a8e-24e2777fdc62",
        college:
            "International Institute of Information Technology Hyderabad, Hyderabad",
    },
    {
        id: "589b4bda-2ea8-48fa-9c63-432a4254a8f2",
        college:
            "IPS ACADEMY, INSTITUTE OF ENGINEERING and SCIENCE, INDORE (MP), Indore",
    },
    {
        id: "0ba2bd80-5804-45eb-9e8e-612430768bad",
        college: "ITM University, Gwalior",
    },
    {
        id: "bc415579-2c39-445b-8ffd-aa90b20f2ebd",
        college: "J. D. College of Engineering, Nagpur",
    },
    {
        id: "4615e98a-6a14-462b-a367-3880cff4adcc",
        college: "J. K. Lakshmipat University, Jaipur",
    },
    {
        id: "a8647503-e217-4b5b-b8da-137fcaae7d8b",
        college: "J. N. N. College of Engineering, Shimoga",
    },
    {
        id: "f409cd0a-37b5-4dc0-91d7-59afa316cac6",
        college: "J.J. College of Engineering and Technology, Tiruchirappalli",
    },
    {
        id: "19915d87-4ba1-4510-be5d-88ff27857141",
        college: "Jadavpur University, Kolkata",
    },
    {
        id: "1fda9dd0-3d28-4d89-a366-6654f7e52c16",
        college: "JAGRAN LAKECITY UNIVERSITY, BHOPAL, Bhopal",
    },
    {
        id: "89c4779f-dd33-4e6b-bf1b-cfc7db2ac0bd",
        college:
            "JAIBHARATH COLLEGE OF MANAGEMENT & ENGINEERING TECHNOLOGY, Perumbavoor",
    },
    {
        id: "e8466b15-a8d3-4368-adcc-2bf545521361",
        college: "Jain University, Bengluru",
    },
    {
        id: "a6e3d385-f272-4b62-80b9-b27dc32d9fc4",
        college: "Jamia Hamdard, New Delhi",
    },
    {
        id: "1844efb5-a082-4958-a19a-a94b8df6f6ab",
        college: "Jamia Millia Islamia, New Delhi",
    },
    {
        id: "cec8c955-3fe7-4ab3-9f1e-7f1d70b1fa55",
        college:
            "Jawaharlal Darda Institute of Engineering & Technology, Yavatmal",
    },
    {
        id: "1d8298c4-c937-4214-b204-b287809b43b9",
        college: "Jawaharlal Nehru Govt.Engineering College, Mandi",
    },
    {
        id: "50911022-13b3-43f4-8d9f-fd86767fd300",
        college: "Jawaharlal Nehru Technological University, Anantapur",
    },
    {
        id: "925e7ea1-f4b6-479f-b3df-8a79afabc2bb",
        college: "Jawaharlal Nehru Technological University, Hyderabad",
    },
    {
        id: "d8340023-90c7-4907-bf69-34ab1c98e815",
        college: "Jaya Institute of Technology, Thiruvallur",
    },
    {
        id: "3c934472-03bd-4f27-b526-5ee1570d1e59",
        college:
            "Jayawant Shikshan Prasarak Mandal's Rajarshi Shahu College of Engineering, Pune",
    },
    {
        id: "bc998d20-944c-4fdd-8448-5f3db1d83a82",
        college: "Jaypee Institute of Information Technology, Noida",
    },
    {
        id: "6d8b082a-d3f5-4829-a244-35423b73dd7f",
        college: "Jaypee University of Engineering & Technology, Guna",
    },
    {
        id: "d7689376-cad8-4c04-b3a1-3f4706b0f5d6",
        college: "Jaypee University of Information Technology, Solan",
    },
    {
        id: "1070ae1e-ad5f-48ca-b1bb-6220851be3a9",
        college: "JB Institute of Engineering & Technology, Rangareddy",
    },
    {
        id: "0bc9b733-7a96-4838-96f4-5282c57251eb",
        college: "JCT College of Engineering and Technology, Coimbatore",
    },
    {
        id: "a911f665-52c0-4899-9dc9-9fc863f36e97",
        college: "JEPPIAAR INSTITUTE OF TECHNOLOGY, Kanchipuram",
    },
    {
        id: "0353a676-5f5a-447f-aebd-1d0c04f0359a",
        college: "Jerusalem College of Engineering, Chennai",
    },
    {
        id: "d6bb462b-b186-48c2-a23c-9a8ce303e1ea",
        college: "Jhulelal Institute of Technology, Lonara, Nagpur",
    },
    {
        id: "dc7c9f88-5098-4dcb-9877-276289dd90dc",
        college: "JIS College of Engineering, Kalyani",
    },
    {
        id: "8e4d4b87-be35-417f-8adb-957280a673c6",
        college: "JNAFAU School of Planning and Architecture, Hyderabad",
    },
    {
        id: "97d36d53-e32a-4040-8931-ec8d727ad899",
        college: "JNTUA College of Engineering, Pulivendula",
    },
    {
        id: "b477c926-899e-4238-b35d-018eb39daa56",
        college: "JNTUA College of Engineering, Anantapur",
    },
    {
        id: "93c0d84c-4796-47e4-9cff-d9bcaf5d79f7",
        college: "JNTUA College of Engineering, Kalikiri, Chittoor",
    },
    {
        id: "7f024877-d1a2-43de-ad00-22226163f55e",
        college: "Jodhpur Institute of Engineering & Technology, JODHPUR",
    },
    {
        id: "65a0ebc0-501b-41e2-9aa6-d5fa215c2981",
        college: "Joginpally B.R Engineering College, Hyderabad",
    },
    {
        id: "d3eca143-f986-46e9-9c81-28392d6fa935",
        college:
            "Joseph Sriharsha & Mary Indraja Educational Society's St. Mary's Group of Institutions, Nalgonda",
    },
    {
        id: "f46429e3-bb81-4138-8fe9-5ba53bb3a0e1",
        college: "JSS Academy of Technical Education\r\n, Gautam Budh Nagar",
    },
    {
        id: "98beb549-07a2-4582-8e8d-afd1bda610b0",
        college: "JSS Academy of Technical Education\r\n, Bengaluru",
    },
    {
        id: "df940df1-838d-429d-bf0e-37d0c32c7c2d",
        college: "JSS Science and Technology University   , Mysuru",
    },
    {
        id: "f25d80ec-e260-47be-b3c0-056012b0b9c1",
        college: "Jyothi Engineering College, Thrissur",
    },
    {
        id: "de8b82a7-7fd6-4992-b1a1-440f7b55b348",
        college: "Jyothy Institute of Technology, Bengaluru",
    },
    {
        id: "5f9f5ffc-c42d-4e76-80a4-769a6e007ab5",
        college: "K J College of Engineering & Management Research, PUNE",
    },
    {
        id: "633b9131-5529-4e33-a08c-4047719534f9",
        college: "K S Institute of Technology, BANGALORE, BENGALURU",
    },
    {
        id: "69382a44-d07b-4faa-bbef-5570ac4d09cb",
        college: "K. G. Reddy College of Engineering & Technology, Rangareddy",
    },
    {
        id: "586ba5dd-7481-4716-948a-002e9b6c761b",
        college: "K. J. Somaiya College of Engineering, Mumbai",
    },
    {
        id: "4369e6dc-9d40-4950-8f0d-476e032d8f9d",
        college:
            "K. J. Somaiya Institute of Engineering & Information Technology, Mumbai",
    },
    {
        id: "506a2ae1-5ca7-4c5e-9c0d-db7fedbc0aff",
        college:
            "K. K. R. & K. S. R. Institute of Technology & Sciences, Guntur",
    },
    {
        id: "b5c28cf7-aa04-4ab5-b79b-14eac5bd0a21",
        college:
            "K. K. Wagh Institute of Engineering Education & Research, Nashik",
    },
    {
        id: "a39f186e-0c1e-4ff7-ad69-508bd6b07182",
        college: "K. L. N. College of Engineering, Sivaganga",
    },
    {
        id: "78fef37a-3cd1-4b9b-abd4-62a5de621fee",
        college: "K. L. N. College of Information Technology, Madurai",
    },
    {
        id: "7e534e80-b4cd-4030-ba24-9890e692ef80",
        college: "K. Ramakrishnan College of Engineering, Samayapuram",
    },
    {
        id: "c28b425e-210b-419e-b8d6-751245d7bc6f",
        college: "K. Ramakrishnan College of Technology (New), Tiruchirappalli",
    },
    {
        id: "97ff36a5-e826-4146-a43e-e61e2d4cbac5",
        college: "K. S. R. College of Engineering, Tiruchengode",
    },
    {
        id: "abec310c-97f9-45a1-a0ec-2da4e0612523",
        college: "K. S. R. M. College of Engineering, Kadapa",
    },
    {
        id: "fc32a474-443f-4086-95dd-7553ef8111a4",
        college: "K. S. Rangasamy College of Technology, Tiruchengode",
    },
    {
        id: "07fea0a4-8bc7-47a7-8f97-60fa38262dda",
        college: "K.L.E.INSTITUTE OF TECHNOLOGY, Hubballi",
    },
    {
        id: "bdc6230e-4cd9-4fbe-a2c9-ad184b64c0c4",
        college: "K.S. SCHOOL OF ENGINEERING AND MANAGEMENT, Bengaluru",
    },
    {
        id: "b0fc4f55-9fea-4434-9c4f-7ec4487e8932",
        college: "Kakatiya Institute of Technology and Science, Warangal",
    },
    {
        id: "026a5af7-0638-4eb2-837f-cadaeede9727",
        college:
            "KAKINADA INSTITUTE OF ENGINEERING & TECHNOLOGY FOR WOMEN, East Godavari",
    },
    {
        id: "0af20fb8-7122-4ba0-bf73-04bab3400ad5",
        college:
            "Kakinada Institute of Engineering & Technology, Kiet, Korangi, Yanam Road, Kakinada.PIN-533461  (CC-B2), East Godavari",
    },
    {
        id: "1dc56d94-ccc3-46d6-a419-8ae273278490",
        college:
            "KAKINADA INSTITUTE OF ENGINEERING & TECHNOLOGY-II, East Godavari",
    },
    {
        id: "7e462f6a-0439-4713-a065-b194df0583c8",
        college: "Kalaignar Karunanidhi Institute of Technology, Coimbatore",
    },
    {
        id: "0a77f43b-d491-4e79-852f-4addcb9f47d9",
        college:
            "Kalasalingam Academy of Research and Higher Education, Srivilliputtur",
    },
    {
        id: "32be127c-cb3f-4813-9331-eedbcdb4798d",
        college: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    },
    {
        id: "f12f9eff-0226-4d03-b6b8-8352fb135a25",
        college: "KALLAM HARANADHAREDDY INSTITUTE OF TECHNOLOGY, Guntur",
    },
    {
        id: "38d5af45-c7a0-4e67-be56-a7642585ece4",
        college:
            "Kalyani Charitable Trust's Late G. N. Sapkal College of Engineering, Nashik",
    },
    {
        id: "c1f8972f-4afd-4a9c-9364-cb4580ed6fa1",
        college: "Kamala Institute of Technology & Science, Karimnagar",
    },
    {
        id: "45203f0c-4d0a-4e67-8a62-f7dee160ddde",
        college: "Kamaraj College of Engineering & Technology, Madurai",
    },
    {
        id: "89cbebd7-6692-45dc-aff6-713f4363805b",
        college:
            "KANDULA LAKSHUMMA MEMORIAL COLLEGE OF ENGINEERING FOR WOMEN, Kadapa",
    },
    {
        id: "08bacc8a-e3f7-4311-96b2-db7ded7a30e5",
        college:
            "Karpaga Vinayaga College of Engineering and Technology, Kancheepuram",
    },
    {
        id: "496e2c11-d976-41e7-b712-af593dc6f30a",
        college: "Karpagam Academy of Higher Education, Coimbatore",
    },
    {
        id: "9da9f64b-4f8f-4802-8d64-34ce76785dc2",
        college: "Karpagam College of Engineering, Coimbatore",
    },
    {
        id: "cfdd85ca-ee8a-4379-83b1-4ddf206ac687",
        college: "Karunya Institute of Technology and Sciences, Coimbatore",
    },
    {
        id: "d2de52bb-beda-4ec7-a2f9-937ba0c28aad",
        college:
            "Kasegaon Education Society's Rajarambapu Institute of Technology, Islampur",
    },
    {
        id: "63461e70-ac76-4e92-af4b-3f8a4c241c0e",
        college: "Kathir College of Engineering, Neelambur",
    },
    {
        id: "073c0d42-afbc-467c-998d-ff18e1ce841a",
        college: "Kavikulguru Institute of Technology and Science, Ramtek",
    },
    {
        id: "6726572a-97ee-4ccf-b304-63464ae1a919",
        college:
            "KCES'S COLLEGE OF ENGINEERING & INFORMATION TECHNOLOGY, JALGAON, Jalgaon",
    },
    {
        id: "67f552f5-cbf7-4e31-98b6-5d1ccd54807b",
        college: "KCG College of Technology, Chennai",
    },
    {
        id: "0d374dc6-0019-47e9-bde0-1ec41b15a6a1",
        college: "Keshav Memorial Institute of Technology, Hyderabad",
    },
    {
        id: "38b7bb38-943d-4a8d-b4e8-5ee5d1dc5c67",
        college: "KGISL INSTITUTE OF TECHNOLOGY, Coimbatore",
    },
    {
        id: "1cc2d8fc-b522-4fee-afe9-62a20f7126f0",
        college: "KIET Group of Institutions, Ghaziabad",
    },
    {
        id: "433aff1a-60c6-4e30-999d-ca2345ac5072",
        college: "Kings College of Engineering, Pudukkottai",
    },
    {
        id: "31520932-6292-43ec-9644-5c34b530da5e",
        college: "KINGS ENGINEERING COLLEGE, Sriperumbudur",
    },
    {
        id: "5f960ae1-ea2f-43b7-8465-3169f2050afa",
        college: "KLE Society's College of Engineering & Technology, Belgaum",
    },
    {
        id: "d26e23fe-d510-427d-b6cb-c2322fc6933b",
        college: "KLE Technological University, Dharwad",
    },
    {
        id: "289b91dc-6fe1-42c8-8dfa-f6aa0d2672e2",
        college:
            "KLS Vishwanathrao Deshpande Institute of Technology, Haliyal, Haliyal",
    },
    {
        id: "01857ef0-32da-4e99-bc15-1b9b73d0fba4",
        college: "KMM Institute of Technology & Science, Tirupathi, Chittoor",
    },
    {
        id: "2bed4e77-97a2-461d-83ee-290b73343f15",
        college: "Knowledge Institute of Technology, Salem",
    },
    {
        id: "c44d1a0d-5a13-43b1-87e2-1efd6a0cea47",
        college:
            "Koneru Lakshmaiah Education Foundation University, Vaddeswaram",
    },
    {
        id: "aad05039-7e9a-40f1-b4f5-41c2edb00cc5",
        college: "Kongu Engineering College, Perundurai",
    },
    {
        id: "31e8e796-7957-420f-a8b3-bb0441be75b6",
        college:
            "KONGUNADU COLLEGE OF ENGINEERING AND TECHNOLOGY, Tiruchirappalli",
    },
    {
        id: "5c5b02fb-3a94-4bc2-b454-58fcf0fe9c02",
        college: "KPR Institute of Engineering and Technology, Coimbatore",
    },
    {
        id: "6fff6899-491d-488c-8514-aca6107575a9",
        college: "KRISHNA ENGINERING COLLEGE, GHAZIABAD, GHAZIABAD",
    },
    {
        id: "5a7f9a3e-3164-48df-973b-de431d1c339c",
        college: "Krishnaswamy College of Engineering, Cuddalore",
    },
    {
        id: "feb6e68f-aaf6-400a-af9a-d1e67015f259",
        college: "KSR Institute for Engineering and Technology, Namakkal",
    },
    {
        id: "716f8b3c-3b3b-47e0-9462-38fafb6c2d6b",
        college: "Kumaraguru College of Technology, Coimbatore",
    },
    {
        id: "f04ed58e-54fa-447a-9766-9ed318252987",
        college: "Kurukshetra University, Kurukshetra",
    },
    {
        id: "34551801-e5a7-479b-976d-7c99a815cf36",
        college: "Lakireddy Bali Reddy College of Engineering, Mylavaram",
    },
    {
        id: "6e7e5650-e3a4-4c8c-b21f-dba9cf7e8b92",
        college: "Lakshmi Narain College of Technology, BHOPAL",
    },
    {
        id: "80395522-e9f3-46bc-85bb-482926105ec7",
        college: "LAKSHMI NARAIN COLLEGE OF TECHNOLOGY  & SCIENCE, Bhopal",
    },
    {
        id: "91afbc6d-b8a3-4e77-aff5-6b03bea4b7a4",
        college: "Laxmi Institute of Technology, Valsad 086, Valsad",
    },
    {
        id: "dba98330-e76e-4826-8943-34bc320bae88",
        college: "Laxminarayan Institute of Technology, Nagpur",
    },
    {
        id: "b60d811b-b967-4b14-b212-95af8b52574d",
        college: "Lendi Institute of Engineering & Technology, Vizianagaram",
    },
    {
        id: "dbde3fb2-e018-4a14-b51f-9eaf4694598d",
        college: "Lingaya's Vidyapeeth, Faridabad",
    },
    {
        id: "650877f5-4e0f-45f4-b808-32d7d13b58e5",
        college: "LINGAYAS INSTITUTE OF MANAGEMENT AND TECHNOLOGY, Vijayawada",
    },
    {
        id: "7feccc80-6c13-4a78-950e-d8ec9d04f19f",
        college: "Lords Institute of Engineering & Technology, Hyderabad",
    },
    {
        id: "9ed43e3e-bd92-48d2-99e2-1244d6166b8b",
        college: "LOURDES MATHA COLLEGE OF SCIENCE AND TECHNOLOGY, Trivandrum",
    },
    {
        id: "c5afce28-8f78-419d-8af5-020e0a9ed13d",
        college: "Lovely Professional University, Phagwara",
    },
    {
        id: "00cacefc-7522-4a09-bda4-b00016f23e38",
        college: "Loyola Institute of Technology, Chennai",
    },
    {
        id: "58853e25-5bc8-4a61-a94b-4189e06a0e5c",
        college: "Loyola Institute of Technology and Science, Nagercoil",
    },
    {
        id: "0b8fb14c-2afd-4701-be0d-c6537a0e03b2",
        college: "Loyola-ICAM College of Engineering and Technology, Chennai",
    },
    {
        id: "d2618fe8-9ea9-41d9-a086-d3966923688a",
        college: "Lukhdhirji Engineering College, Morbi",
    },
    {
        id: "0f9b14bd-84f6-4560-86f6-20fae2b87e0c",
        college:
            "M. A. M. College of Engineering and Technology, Tiruchirappalli",
    },
    {
        id: "9b4d9f59-d68b-4008-856a-ed402e32ab66",
        college: "M. G. R. Educational and Research Institute, Chennai",
    },
    {
        id: "2ce056ab-2d1d-458b-95a4-97b3b36fbc50",
        college: "M. I. E. T. Engineering College, Tiruchirappalli",
    },
    {
        id: "06aaa17f-ef5d-4f56-af00-3b62bf644733",
        college: "M. S. Ramaiah Institute of Technology, Bengaluru",
    },
    {
        id: "04f3b4dd-f6a1-4e32-a551-982e9619068a",
        college: "M. S. Ramaiah University of Applied Sciences, Bangalore",
    },
    {
        id: "d2e903cf-08fe-4d7d-8060-3732668f8720",
        college: "M.G.M'S COLLEGE OF ENGINEERING ,NANDED, Nanded",
    },
    {
        id: "55dad628-2333-4632-a8c3-e30784d3dce4",
        college: "M.Kumarasamy College of Engineering, Karur",
    },
    {
        id: "f7ff71b1-bee0-474d-a2a3-c7c6480bb585",
        college: "M.S. Bidwe College of Engineering, Latur, Latur",
    },
    {
        id: "77ba21fb-27f2-4efc-b7c3-68bbb02df93e",
        college: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    },
    {
        id: "1b2c113f-eadc-4af1-af3b-6e79761896f4",
        college: "Madanapalle Institute of Technology & Science, Chittoor Dist",
    },
    {
        id: "867f5234-8c63-4a35-b60e-bd0b42dddd2b",
        college:
            "Madhuben and Bhanubhai Patel Institute of Technology, New Vallabh Vidyanagar",
    },
    {
        id: "f0ccc22e-ef4d-4600-aff7-299703aa01fc",
        college:
            "Maharaj Vijayaram Gajapathi Raj College of Engineering, Vizianagaram",
    },
    {
        id: "9e2e7cb5-bbbe-46e9-b949-727ead175cb8",
        college: "Maharaja Agrasen Institute of Technology, Delhi",
    },
    {
        id: "67e4f870-7425-4f09-8863-edf2b56a8e73",
        college: "Maharaja Institute of Tech., Mysore, Mandya",
    },
    {
        id: "a4f49b63-36c0-4b8f-bbbb-0d875f3205ff",
        college: "Maharaja Sayajirao University of Baroda, Vadodara",
    },
    {
        id: "4f2fc470-59ef-475d-8544-8ef108608a7b",
        college: "Maharaja Surajmal Institute of Technology, New Delhi",
    },
    {
        id: "63040a48-849f-4eed-920f-ef0c6690d4cf",
        college: "Maharashtra Institute of Technology, Aurangabad",
    },
    {
        id: "4c2763d2-b6f8-4af4-820b-bfd4f0eaee16",
        college: "Maharishi Markandeshwar, Ambala",
    },
    {
        id: "a98e06f3-a50d-449d-8f95-0f82252a6f6b",
        college: "Maharshi Dayanand University, Rohtak, Rohtak",
    },
    {
        id: "d1bbf77f-ade6-40fc-b6ba-0b45e569e705",
        college:
            "Maharshi Karve Stree Shikshan Samstha's Cummins College of Engineering for Women, Pune",
    },
    {
        id: "e826348a-8146-4b2d-aa5d-4156685bbe39",
        college:
            "Mahatma Education Society's, Pillai HOC College of Engineering and technology, Raigarh",
    },
    {
        id: "b760b028-b916-4d4e-a534-e8c29b94427f",
        college: "Mahatma Gandhi Institute of Technology, Hyderabad",
    },
    {
        id: "a9af79a3-11e8-4f87-84ab-31cd10573db9",
        college:
            "Mahatma Gandhi Mission's College of Engineering and Technology, Raigarh",
    },
    {
        id: "2966eefd-ebc1-4bcf-8972-0aa6265a9cde",
        college:
            "Mahatma Gandhi Mission's Jawaharlal Nehru Engineering College, Aurangabad",
    },
    {
        id: "48cf48fd-8aa3-4704-acb2-09e797a2e3a2",
        college: "Mahaveer Institute of Science &Technology, Hyderabad",
    },
    {
        id: "68786a71-f270-474c-a261-54bceeaa0769",
        college: "Mahendra College of Engineering, Salem",
    },
    {
        id: "742ff78b-918a-41fb-b4b5-9d1284fe400c",
        college: "Mahendra Engineering College, Namakkal",
    },
    {
        id: "55ab213c-0e5c-41ee-9221-b3d5b020bf6d",
        college: "Mahendra Institute of Technology, Namakkal",
    },
    {
        id: "d76993da-4b52-404f-9ebc-06205f7494b6",
        college: "Mailam Engineering College, Viluppuram",
    },
    {
        id: "cd97e11d-b5ca-4c97-9a65-c1c8a75a10b7",
        college: "Malaviya National Institute of Technology, Jaipur",
    },
    {
        id: "9f9c4581-108e-494e-bd0c-8afc91675acd",
        college: "Malineni Lakshmaiah Engineering College, Singarayakonda",
    },
    {
        id: "7a5ac432-a266-4fde-94cc-db36edd58d96",
        college: "Malla Reddy College of Engineering, Hyderabad",
    },
    {
        id: "0a96fb3b-8f2f-4eb9-99b8-655358082fed",
        college:
            "Malla Reddy College of Engineering and Technology (Autonomous), Secunderabad",
    },
    {
        id: "a9dfac7c-4757-466a-b01b-f12a78feee56",
        college: "Malla Reddy College of Engineering for women, HYDERABAD",
    },
    {
        id: "46965ac7-123c-4493-a099-b45e7cdd6fb3",
        college: "Malla Reddy Engineering College, Hyderabad",
    },
    {
        id: "423783b7-1cb7-4cd2-be73-cc5fac564a7c",
        college: "Malla Reddy Engineering College for Women, Hyderabad",
    },
    {
        id: "ac3d415c-eeca-446d-9dfe-55d83c42cf4b",
        college:
            "Malla Reddy Institute of Engineering and Technology, Maisammagu",
    },
    {
        id: "0403757a-e943-467e-bd85-36245a6d9eae",
        college: "Malla Reddy Institute of Technology, Hyderabad",
    },
    {
        id: "820b4b14-1e42-4e1d-b009-27715c7f16ed",
        college: "Malla Reddy Institute of Technology & Science, Secunderabad",
    },
    {
        id: "f0819280-2d4b-43ff-90b4-71ea5f3e7d7b",
        college: "Malnad College of Engineering, HASSAN, Hassan",
    },
    {
        id: "a8c0156f-93e3-4958-b337-b9cae5e8b9ac",
        college: "Manakulavinayagar Institute of Technology, Puducherry",
    },
    {
        id: "b0b6f7f0-971b-483a-8ee1-44cef1818c80",
        college:
            "ManavRachna International Institute of Research & Studies, Faridabad",
    },
    {
        id: "29add9b5-811e-4a37-9fd7-3824777e7552",
        college: "MANDAVA INSTITUTE OF ENGINEERING AND TECHNOLOGY, Krishna",
    },
    {
        id: "07b1b6ae-db29-44a4-938e-4039f8748c88",
        college: "Mangalore Institute of Technology & Engineering, Mangaluru",
    },
    {
        id: "784c493c-8a16-4f87-866d-ce1a0c994ab1",
        college: "Manipal Institute of Technology, Manipal",
    },
    {
        id: "52832448-f561-4201-84a7-2b96766983ff",
        college: "Manipur Institute of Technology, Imphal West",
    },
    {
        id: "cda2186a-8785-47a5-be5f-723736b1aff4",
        college:
            "Mar Baselios Christian College of Engineering & Technology, Peermade",
    },
    {
        id: "bde9923e-4add-4e08-a317-41b62d550e63",
        college:
            "Mar Baselios College of Engineering and Technology, Thiruvananthapuram",
    },
    {
        id: "c154fac9-6db3-454f-a2cf-5b43a460f0f0",
        college:
            "Mar Baselios Institute of Technology and Science, Kothamangalam",
    },
    {
        id: "689422bc-2cbf-403c-a19f-9eaaf59380f7",
        college: "Maratha Mandal Engineering College, BELGAUM, Belgaum",
    },
    {
        id: "ee9b3cd3-ef7b-47e0-9e1d-f7725c25cc8f",
        college: "Marathwada Institute of Technology, Aurangabad",
    },
    {
        id: "59a58a81-d5ff-479b-bc4a-f0a465a31c2f",
        college: "Marathwada Mitra Mandal College of Engineering Pune, PUNE",
    },
    {
        id: "e679c1f4-bb2f-4e65-9ea8-94d05632e7dc",
        college: "MARATHWADA MITRA MANDAL'S INSTITUTE OF TECHNOLOGY, Pune",
    },
    {
        id: "437ccc2c-12b5-4b88-ad16-b3a5eeced0f9",
        college: "Marian Engineering College, Thiruvananthapuram",
    },
    {
        id: "ecc1e95f-c59c-4d93-b8f8-7534cc8aea7c",
        college:
            "Marri Educational Society's Marri Laxman Reddy Institute of Technology and Management, Hyderabad",
    },
    {
        id: "609cf21c-bcca-410a-950e-7a77a3c6e47a",
        college: "Matrusri Enginering College, Hyderabad",
    },
    {
        id: "0f30f1af-bfc5-4c81-b48d-9dce84cb2b55",
        college: "Maulana Abul Kalam Azad University of Technology, Nadia",
    },
    {
        id: "6074b62f-86df-4910-8895-7a27dd6db81e",
        college: "Maulana Azad National Institute of Technology, Bhopal",
    },
    {
        id: "d2ac3e25-36e8-4b69-ac98-d030c32ec1f4",
        college:
            "MAULI GROUP OF INSTITUTIONS, COLLEGE OF ENGINEERING AND TECHNOLOGY, Shegaon",
    },
    {
        id: "7c05c1d7-0d82-40b8-911b-e330d71dc353",
        college: "MCKV Institute of Engineering, HOWRAH",
    },
    {
        id: "12b0278a-ab47-42ca-babe-0c317756c0d4",
        college: "Meenakshi Sundararajan Engineering College, Chennai",
    },
    {
        id: "f1caa8d7-d07b-4006-b6af-75c33e686f85",
        college: "Meerut Institute of Engineering & Technology, Meerut",
    },
    {
        id: "a6bc061d-fb9c-4288-a747-67fc04b8ba3f",
        college: "Meghnad Saha Institute of Technology, Kolkata",
    },
    {
        id: "6c2ced5b-0199-48c4-b47a-9f434fe5273c",
        college: "Mepco Schlenk Engineering College, Sivakasi",
    },
    {
        id: "3dc3f36b-766f-4f23-823a-a928983a36cf",
        college: "Methodist College of Engineering & Technology, Hyderabad",
    },
    {
        id: "909aef70-969b-48d5-94a7-d5a8d91b0d08",
        college: "Mewar University, Chittorgarh",
    },
    {
        id: "aad8ee0a-f21d-4178-8810-664118b90f9a",
        college: "MIT Academy of Engineering, Pune",
    },
    {
        id: "a031a1ea-3233-407c-a9f2-f24a2ee1b782",
        college: "MKSSS's Cummins College of Engineering for Women, Nagpur",
    },
    {
        id: "d3b49f9d-7e73-497d-aaec-526f9bd1269a",
        college: "MLR Institute of Technology, Hyderabad",
    },
    {
        id: "6322383d-c554-4e47-941f-c24f62952104",
        college: "MM COLLEGE OF TECHNOLOGY, Raipur",
    },
    {
        id: "46bcf891-a646-4cb9-ac66-551aa8971bc0",
        college: "MNR College of Engineering & Technology, SANGAREDDY",
    },
    {
        id: "f89d1241-f73a-427e-b249-eb605f6670ad",
        college: "Model Institute of Engineering and Technology, Jammu",
    },
    {
        id: "e817ff2f-ae23-4282-ba3e-ac078ba410d3",
        college:
            "Mody Institute of Technology & Science, Sikar, Sikar, Rajasthan",
    },
    {
        id: "0d8a0345-33fd-4d1f-8ed9-caaee3fc172f",
        college:
            "Mohamed Sathak Engineering College, Kilakarai, Ramanathapuram",
    },
    {
        id: "bd309722-bed6-499e-9662-cc39bd32e5da",
        college: "MORADABAD INSTITUTE OF TECHNOLOGY, Moradabad",
    },
    {
        id: "607a69a0-c0be-455a-9f01-021936537eca",
        college:
            "Mother Theresa Institute of Engineering and Technology, Palamaner",
    },
    {
        id: "dbb47c99-6eb2-4479-b5b5-9e4b2a17debb",
        college: "Motilal Nehru National Institute of Technology, Allahabad",
    },
    {
        id: "1259a113-79a8-4362-860c-f5957bd140d8",
        college: "MRR Institute of Technology & Science, Udayagiri",
    },
    {
        id: "dc370712-51ab-45fd-ad59-8f622bc5d0fe",
        college:
            "Muffakham Jah College of Engineering and Technology, Hyderabad",
    },
    {
        id: "e701f5ac-b3c7-458d-98ae-c1518738a9ea",
        college: "Muthayammal Engineering College, Namakkal",
    },
    {
        id: "c07ab24d-0df4-4dc0-84ca-e76ec2c6ae23",
        college: "MUTHOOT INSTITUTE OF TECHNOLOGY AND SCIENCE, Puthencruz",
    },
    {
        id: "ee3cef8b-4896-484e-a5d7-6c3dc5987051",
        college: "MVJ College of Engineering, Bengaluru",
    },
    {
        id: "adb98d2b-2863-4220-9793-b2ac220d3ff2",
        college: "MVR College of Engineering & Technology, VIJAYAWADA",
    },
    {
        id: "9fa42cb6-eb46-411f-ae07-f598aa7d43c8",
        college: "MVSR Engineering College, HYDERABAD",
    },
    {
        id: "ecbfa8cb-53be-4249-ab14-8b9bcd057476",
        college: "N M A M Institute of Technology, Nitte, \r\nUdupi",
    },
    {
        id: "77c863bf-f01e-4e48-879a-d802f1d018bb",
        college: "N. B. K. R. Institute of Science & Technology, Vidyanagar",
    },
    {
        id: "8578d143-544d-4e3e-8134-3f3f23b3bd48",
        college: "N. B. Navale Sinhgad College of Engineering, Kegaon",
    },
    {
        id: "ffbe3841-b184-4590-8213-339dd7f00975",
        college: "NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY, Theni",
    },
    {
        id: "443aeb25-ef05-4513-b360-4a1f2b3e994b",
        college:
            "Nadimpalli Satyanarayana Raju Institute of Technology, Visakhapatnam",
    },
    {
        id: "5ac01a40-0f66-46e8-bb9d-6e8bde021370",
        college:
            "Nagarjuna College of Engg. & Technology, BANGALORE, Bengaluru",
    },
    {
        id: "aec05989-5159-485e-8a77-cccb43367de6",
        college:
            "Nagesh Karajagi Orchid College of Engineering and Technology, Solapur., Solapur",
    },
    {
        id: "66ddce0c-bd34-409d-8b12-00f634604ccc",
        college: "Nagpur Institute of Technology, Katol road, Nagpur",
    },
    {
        id: "6d662da1-1758-4444-a6ec-e8723f42e756",
        college: "Nalla Malla Reddy Engineering College, Hyderabad",
    },
    {
        id: "28192b39-fdfe-4049-b56b-e81acfe255f1",
        college:
            "Nalla Narasimha Reddy Education Society's Group of Institutions, Hyderabad",
    },
    {
        id: "49f6071b-d963-4d7b-b2dc-6729cfce7010",
        college: "Nanasaheb Mahadik College of Engineering, Peth, Sangli",
    },
    {
        id: "2b76c567-d28b-4c91-91eb-c3fc18046ffd",
        college: "Nandha Engineering College, Erode",
    },
    {
        id: "fd337d0e-d824-43fb-9ccf-bf28a7010737",
        college: "Narasaraopeta Engineering College, Narasaraopet",
    },
    {
        id: "c8cbd74b-70a0-4b8f-9c83-9b212caf8578",
        college:
            "Narasaraopeta Institute of Technology, Kotappakonda Road, Yellamanda(P.O), Narasaraopet, PIN-522601  (CC-KH), Narasaraopet",
    },
    {
        id: "cf59bba4-005d-4b1b-9ab8-698866f86357",
        college: "NARSIMHAREDDY ENGINEERING  COLLEGE, Secunderabad",
    },
    {
        id: "665e6f89-d419-416f-ada5-633e6edf6770",
        college: "Narula Institute of Technology, Kolkata",
    },
    {
        id: "2ab59f36-b487-491f-b450-b064a42e871f",
        college: "National Engineering College, Kovilpatti",
    },
    {
        id: "3e04855b-9828-4eff-8893-8b5ec77a735b",
        college: "National Fire Service College, Nagpur",
    },
    {
        id: "bbfa3e8b-6023-40a8-9367-59520e6aecf0",
        college:
            "National Institute of Food Technology, Enterprenurship & Management, Sonipat",
    },
    {
        id: "34a9e579-ddc8-447f-aa0a-700acf3fccb2",
        college:
            "National Institute of Foundry and Forge Technology (NIFFT), Ranchi",
    },
    {
        id: "2d060b82-aa02-4911-8d2a-875575a99376",
        college: "National Institute of Science & Technology, Berhampur",
    },
    {
        id: "0ae47ffb-6271-46c7-8e7b-ef276ae0cfce",
        college: "National Institute of Technology Agartala, Agratala",
    },
    {
        id: "a5c76ea3-ac4b-4d43-b9ad-c6f509770e4b",
        college: "National Institute of Technology Arunachal Pradesh, Itanagar",
    },
    {
        id: "c3b137c0-8d72-4d8c-80dd-6f63580b7152",
        college: "National Institute of Technology Calicut, Kozhikode",
    },
    {
        id: "b2f9847d-4a8d-42a5-bb62-dd89fba27028",
        college: "National Institute of Technology Delhi, Delhi",
    },
    {
        id: "9f710ce0-1349-4f83-a45f-c63739fb71da",
        college: "National Institute of Technology Durgapur, Durgapur",
    },
    {
        id: "dc35d35b-fe5e-4207-ac1d-a9c5b04ca233",
        college: "National Institute of Technology Goa, Ponda",
    },
    {
        id: "50b4eae2-6d91-495c-95d9-1db0b43240e5",
        college: "National Institute of Technology Hamirpur, Hamirpur",
    },
    {
        id: "0ec3a7dc-020e-41fe-ac24-2f6a0f02f95a",
        college: "National Institute of Technology Jamshedpur, Jamshedpur",
    },
    {
        id: "70c45baa-f571-404e-91b0-25031a17f8cc",
        college: "National Institute of Technology Karnataka, Surathkal",
    },
    {
        id: "ecb95aae-62ef-4d4e-b014-8f4f11fbdaea",
        college: "National Institute of Technology Kurukshetra, Kurukshetra",
    },
    {
        id: "b8b1ee13-603d-46c5-8a11-4b2bc5944bdd",
        college: "National Institute of Technology Manipur, Imphal",
    },
    {
        id: "2132fe36-59bb-4aae-bd8a-9b50c4848b17",
        college: "National Institute of Technology Meghalaya, Shillong",
    },
    {
        id: "a954ba67-7d99-45b4-9d54-f7f55cf81d4c",
        college: "National Institute of Technology Mizoram, Aizawl",
    },
    {
        id: "1ca72bb3-8b79-412d-9095-ec5a124d37c6",
        college: "National Institute of Technology Nagaland, Dimapur",
    },
    {
        id: "a90129e3-e8de-4059-920d-9c6e3ce5de79",
        college: "National Institute of Technology Patna, Patna",
    },
    {
        id: "210374a4-0491-49a8-8fb5-497d09770294",
        college: "National Institute of Technology Puducherry, Karaikal",
    },
    {
        id: "7eba4565-0df8-4712-9c2c-32cd7da7751c",
        college: "National Institute of Technology Raipur, Raipur",
    },
    {
        id: "2afa9164-f626-4bd0-81f9-ee87eb17c28c",
        college: "National Institute of Technology Rourkela, Rourkela",
    },
    {
        id: "68bdd490-ad4c-4db8-8ecb-1243154abf0b",
        college: "National Institute of Technology Sikkim, South Sikkim",
    },
    {
        id: "ea809dcf-b4b2-4559-bcce-35e856b3338f",
        college: "National Institute of Technology Silchar, Silchar",
    },
    {
        id: "32937ca1-9da5-4baf-b9a2-e061b658d488",
        college: "National Institute of Technology Srinagar, Srinagar",
    },
    {
        id: "fc76d471-b9b4-494b-8e65-dd83db4b441f",
        college:
            "National Institute of Technology Tiruchirappalli, Tiruchirappalli",
    },
    {
        id: "7fbe196f-e118-4c38-8baf-d96f22a14d19",
        college:
            "National Institute of Technology Uttarakhand, Srinagar (Garhwal)",
    },
    {
        id: "763c48d0-62d1-4b78-b337-fa3e5db0ebc3",
        college: "National Institute of Technology Warangal, Warangal",
    },
    {
        id: "6cb92d3a-b08a-4555-8a1c-571e03934d1e",
        college:
            "Nav Nirman Sewa Samiti'S Samalkha Group Of Institutions, PANIPAT",
    },
    {
        id: "1d16f59f-f2a5-41f8-a546-88b9dcbb7867",
        college: "NEHRU COLLEGE OF ENGINEERING AND RESEARCH CENTRE, Pampady",
    },
    {
        id: "efca76ce-143d-4f21-8035-f16660259f7f",
        college: "Netaji Subhas University of Technology (NSUT), South West",
    },
    {
        id: "227aa922-418d-4e78-bb67-e8a32035a4e8",
        college: "Netaji Subhash Engineering College, Kolkata",
    },
    {
        id: "2ff3d658-42a9-4244-940d-9fdf34d5c622",
        college: "New Horizon College of Engineering, Bengaluru",
    },
    {
        id: "9252f875-4ce9-47ab-aca0-e6c617310594",
        college:
            "New Prince Shri Bhavani College of Engineering and Technology, Chennai",
    },
    {
        id: "65238764-3189-4d18-8268-6e199d444501",
        college: "NIE Institute of Technology, Mysore",
    },
    {
        id: "534126ad-531e-4cc1-a4cf-4a0b964ea916",
        college: "NIIT UNIVERSITY, Neemrana",
    },
    {
        id: "388f1159-5102-4239-a8e0-8fe377f5482a",
        college: "Nirma University, Ahmedabad",
    },
    {
        id: "b99746f1-938f-4534-abaf-4e80009c5626",
        college: "Nitte Meenakshi Institute of Technology, Bengaluru",
    },
    {
        id: "7088c9f3-f9aa-4ca4-aaed-03d5a6ba1da8",
        college: "Noida Institute of Engineering & Technology, Greater Noida",
    },
    {
        id: "1c2fef52-eb4b-4556-bd8a-c79a4351d984",
        college: "Noorul Islam Centre for Higher Education, Kanyakumari",
    },
    {
        id: "376ef901-a6ef-4f78-a8d8-d31f82615518",
        college:
            "North Eastern Regional Institute of Science & Technology, Itanagar",
    },
    {
        id: "0e917502-160b-4524-a5c6-d68ab5c65240",
        college: "NRI Institute of Technology, VIJAYAWADA",
    },
    {
        id: "9ba8f4f5-deb1-49c3-ab9c-8a933f082326",
        college: "NSS College of Engineering, Palakkad",
    },
    {
        id: "bff3e3d9-685d-4517-9bd4-ba3e2018b48a",
        college:
            "Nutan Maharashtra Vidya Prasarak Mandal's Nutan Maharashtra Institute of Engineering and Technology, Talegoan Station Tal Maval Dist Pune, Talegaon Dabhade",
    },
    {
        id: "9b40ea8b-221f-48c7-bffa-fd2ed280259f",
        college: "O.P. Jindal University, Raigarh",
    },
    {
        id: "09b9acb7-9a2d-458f-ae4e-b687f918ac13",
        college: "Omdayal Group of Institutions, HOWRAH",
    },
    {
        id: "61e8e6f9-38c4-4752-9eea-5c5ef215303a",
        college: "Oriental College of Technology, Bhopal",
    },
    {
        id: "b4fc6a50-a3f3-4067-bb04-637a1e01297f",
        college: "Oriental Institute of Science and Technology, Bhopal",
    },
    {
        id: "f388a399-b440-474e-95d1-e916404c4049",
        college: "P D A College of Engineering, Kalaburagi",
    },
    {
        id: "cf0834f4-adf5-4ab5-a60e-ebb6f912e64d",
        college: "P E S College of Engineering, Mandya",
    },
    {
        id: "6ef44060-c171-4b34-885d-ab947139f1ef",
        college:
            "P. R. Pote (Patil) Education & Welfare Trust's Group of Institutions's College of Engineering & Management, Amravati., AMRAVATI",
    },
    {
        id: "1dd9c3d0-b8ac-4333-918c-0aa7e4104d83",
        college: "P. S. R. Engineering College, Virudhunagar",
    },
    {
        id: "04570e1c-123e-45d8-b1ed-09ab12f7a65a",
        college:
            "P. S. R. Rengasamy College of Engineering for Women, Sivakasi",
    },
    {
        id: "9aceb817-314f-468c-9ce5-a23ce24d0b7a",
        college: "Paavai Engineering College, Namakkal",
    },
    {
        id: "9f5b28e4-34f8-4685-ba58-85d1ea234065",
        college: "Pace Institute of Technology and Sciences, Ongole",
    },
    {
        id: "7ac6e368-562c-4f77-a503-304970d613cc",
        college:
            "PADMABHOOSHAN VASANTRAODADA PATIL INSTITUTE OF TECHNOLOGY, Budhgaon",
    },
    {
        id: "d1cb6fab-2d8b-410c-b803-5defc6e37ded",
        college:
            "Padmabhushan Vasantdada Patil Pratishthan's College of Engineering, Mumbai",
    },
    {
        id: "a269c4f9-c228-4116-af75-f15a494a0484",
        college: "Padmasri Dr. B.V. Raju Institute of Technology, Medak",
    },
    {
        id: "9904f3d7-9efd-4c8f-a4ff-63fc05ee7eda",
        college:
            "Padmshri Dr.V.B.Kolte College of Engineering, Malkapur, Malkapur",
    },
    {
        id: "7cbc1f1f-1ed9-4a24-831c-9801db68120a",
        college: "Padre Conceicao College of Engineering, Verna",
    },
    {
        id: "f089976c-3ea7-4b39-9ed2-1871f2c37180",
        college: "Pallavi Engineering College, Hyderabad",
    },
    {
        id: "5287bd9b-2ac7-4f2f-ad99-a6aa4be5f5c1",
        college: "Pandit Deendayal Petroleum University, Gandhinagar",
    },
    {
        id: "7394b28e-2b9c-41ce-9f6d-20c8d0b24308",
        college:
            "Pandiyan Saraswathi Yadav Engineering College, Arasanoor, Sivagangai, Thirumansoali Post",
    },
    {
        id: "e1485f07-9a4f-4f06-a0c0-f0a8159752e4",
        college: "Panimalar Engineering College, Thiruvallur",
    },
    {
        id: "8df68ec8-c66b-4f59-b459-90584c1aa4fa",
        college: "Panimalar Institute of Technology, Thiruvallur",
    },
    {
        id: "b7a8f45d-840c-445d-ba76-1cb369a070ea",
        college: "Panjab University, Chandigarh",
    },
    {
        id: "3db89aae-596c-4025-ab52-24a81762fda6",
        college: "Parala Maharaja Engineering College, Berhampur",
    },
    {
        id: "044aad9f-1aa2-4d45-9278-e8876a9c2673",
        college: "Parul Institute of Engineering & Technology, Vadodara",
    },
    {
        id: "39514bc6-45b2-4f97-b1a3-f4e4f6924c7d",
        college:
            "Parvathareddy Babulreddy Visvodaya Institute of Technology and Science, Kavali",
    },
    {
        id: "385f1928-a644-4d2e-9139-81da2895346a",
        college: "Pavai College of Technology, Namakkal",
    },
    {
        id: "07fd9210-f32f-4f8c-9f02-a1274a93e028",
        college: "Peri Institute of Technology, Kancheepuram",
    },
    {
        id: "989502bf-fecb-456f-b88a-fbbc8ffd7daa",
        college:
            "Periyar Manaimmai Institute of Science & Technology (PMIST), Vallam Thanjavur",
    },
    {
        id: "f3512ce4-3242-4542-8838-5649122c7d2c",
        college:
            "Perunthalaivar Kamarajar Institute of Engineering and Technology, Karaikal",
    },
    {
        id: "0aae6ada-f989-48a7-b2b6-5e8e1cde94e3",
        college:
            "PES Institute of Technology & Management,  SHIVAMOGA, Shimoga",
    },
    {
        id: "ba04e205-ede3-466f-82b9-7201d24dd2d8",
        college: "PES University, Bengaluru",
    },
    {
        id: "4e76804e-c40e-4e79-9b04-9e638d8c6671",
        college: "Pillai College of Engineering, Raigarh",
    },
    {
        id: "1590643d-f4d8-4fe5-885f-47332235b9f2",
        college: "Pimpri Chinchwad College of Engineering, Pune",
    },
    {
        id: "2573666f-05d7-4a64-9cdc-11be918fa29a",
        college: "Pondicherry Engineering College, Puducherry",
    },
    {
        id: "2bae99b8-4bb5-48d0-ab9e-2e029b043fad",
        college: "Ponjesly College of Engineering, Nagercoil",
    },
    {
        id: "157fd6d3-5322-4d68-a72d-2a1ce75e67e1",
        college:
            "Ponnaiyah Ramajayam Institute of Science & Technology, Thanjavur",
    },
    {
        id: "dd715b35-0b8d-4ba1-93b5-faf231310392",
        college: "Pragati Engineering College, Surampalem",
    },
    {
        id: "6e6f0100-3af5-4f44-85dd-9d9cdb6f0f23",
        college: "Prakasam Engineering College, Prakasam",
    },
    {
        id: "7b617186-8c7e-4293-92cd-2c3caffac3ce",
        college: "Pranveer Singh Institute Of Technology, Kanpur",
    },
    {
        id: "6a51392a-b225-4b24-9335-016cbe65fce7",
        college:
            "Prasad V Potluri Siddhartha Institue of Technology, Vijayawada",
    },
    {
        id: "0158e676-9ff7-4d06-8c56-f16ee5a52909",
        college: "Prathyusha Engineering College, Thiruvallur",
    },
    {
        id: "a7a8ee7c-1bfb-4b86-ad0a-1adf206571b6",
        college:
            "Pravara  Gramin Education Society's Sir Vishweshwarayya College of Engineering, Nashik",
    },
    {
        id: "37c59418-66ad-4182-a724-5e76759f2b5f",
        college: "PRAVARA RURAL ENGINEERING COLLEGE, Loni",
    },
    {
        id: "e3bd19d1-ef52-475d-8fb4-c00dc0a5b0f4",
        college: "PRESIDENCY UNIVERSITY , BENGALURU, Bengaluru",
    },
    {
        id: "dbb8908a-fc7e-40e4-9857-a6d3985fb062",
        college:
            "Prestige Institute Of Engineering Management & Research, Indore",
    },
    {
        id: "e5da517a-2da4-418b-88df-a90ac84cd944",
        college: "Priyadarshini Bhagwati  College of Engineering, Nagpur",
    },
    {
        id: "39927499-2940-4b6e-96ea-40598d16b543",
        college: "Priyadarshini Engineering College, Nagpur",
    },
    {
        id: "66264d75-9899-4493-a60c-df79a0ad5c24",
        college:
            "PRIYADARSHINI INSTITUTE OF ENGINEERING AND TECHNOLOGY,NAGPUR., Nagpur",
    },
    {
        id: "e68c0b1c-e41c-46e1-83f0-b5c3256188b8",
        college: "PROF RAM MEGHE COLLEGE OF ENGINEERING & MANAGEMENT, Amravati",
    },
    {
        id: "429a7a24-bd19-49cb-9c75-a5caf9daf04e",
        college:
            "Prof. Ram Meghe Institute of Technology & Research, Badnera Amravati",
    },
    {
        id: "2a73e4ba-15ef-4bb1-91a5-f4f797e64ced",
        college:
            "Progressive Educational Society's Modern College of Engineering, Pune",
    },
    {
        id: "9d4548eb-b28c-40d4-9fcb-9eab0b21e803",
        college: "PSG College of Technology, Coimbatore",
    },
    {
        id: "375a7042-fdb4-4da1-bb01-dc6993fa779b",
        college: "PSIT College of Engineering, Kanpur, Kanpur",
    },
    {
        id: "d9383c89-238b-4f9d-ba30-e4fa055faf85",
        college:
            "PSNA College of Engineering and Technology, Dindigul, Dindigul",
    },
    {
        id: "f98699c8-ba53-43a6-abf0-0ec24933016c",
        college:
            "Pune Vidyarthi Griha's College of Science and Technology, PUNE",
    },
    {
        id: "27cff715-8a0a-4e75-9365-994ba985b324",
        college:
            "Punjab Engineering College (Deemed To Be University), Chandigarh",
    },
    {
        id: "104ac189-1333-4e1b-bbb9-8389756cc087",
        college: "Punjab Technical University, Kapurthala",
    },
    {
        id: "5e003b2e-24f0-49ed-a303-2017c0960719",
        college: "QIS College of Engineering & Technology, Ongole",
    },
    {
        id: "e917e468-889b-4f1e-adf6-3a6fc5a27c2a",
        college: "QIS Institute of Technology, Ongole",
    },
    {
        id: "de60c291-9df5-4e96-8b18-4797b94e608d",
        college: "Quantum School of Technology, Roorkee",
    },
    {
        id: "c4bb01d0-5b05-4f7a-91b7-af537ad30e7e",
        college: "Quba College of Engineering & Technology,  Nellore",
    },
    {
        id: "76dbec6f-7827-4d95-8758-28736c44dc26",
        college: "R. K. University, Rajkot",
    },
    {
        id: "00efa803-b3ca-4d0c-a27e-d1fdb777bd43",
        college: "R. M. D Engineering College, Thiruvallur",
    },
    {
        id: "46aa57c9-9ca4-49ca-a81c-d7b297c018c1",
        college: "R. M. K. College of Engineering and Technology, Thiruvallur",
    },
    {
        id: "449bbd97-6f85-42b9-a5f7-75a3cfab4fba",
        college: "R. M. K. Engineering College, Thiruvallur",
    },
    {
        id: "d9969060-2ea1-4421-894d-f7c0d0197638",
        college: "R. N. S. Institute of Technology, Bengaluru",
    },
    {
        id: "a8743a78-98f3-4684-8663-894be94cec2b",
        college: "R. R. Institute of Technology, Bengaluru",
    },
    {
        id: "f94157da-2eb4-4589-b824-c1642ac1149c",
        college: "R. V. College of Engineering, Bengaluru",
    },
    {
        id: "c14424e4-bf1b-4b0e-85de-43b0435aac7a",
        college: "R. V. R. & J. C. College of Engineering, Guntur",
    },
    {
        id: "2cb763cf-f4ef-477d-8462-537707163ad5",
        college: "R.D.Engineering College, Ghaziabad",
    },
    {
        id: "45426eeb-fb6e-42b3-b325-15eb34941bfc",
        college: "R.V.S.College of Engineering, Dindigul",
    },
    {
        id: "9b0f025d-6633-43ac-8da1-66313e0e3d99",
        college: "Raghu Engineering College, Visakhapatnam",
    },
    {
        id: "2ad35423-2695-444b-97c9-c281573c8909",
        college: "RAJ KUMAR GOEL INSTITUE OF TECHNOLOGY, Ghaziabad",
    },
    {
        id: "77711379-cbd3-41d0-b782-8e444b7386e4",
        college: "RAJADHANI INSTITUTE OF ENGINEERING AND TECHNOLOGY, Attingal",
    },
    {
        id: "a8427a5f-bfd2-4596-95be-fcd07293d350",
        college: "Rajagiri School of Engineering and Technology, Ernakulam",
    },
    {
        id: "365225d2-86c6-41aa-b194-7795da40de48",
        college: "Rajalakshmi Engineering College, Chennai",
    },
    {
        id: "d4365acd-abd9-43af-abbd-145faeb42455",
        college: "Rajalakshmi Institute of Technology, Thiruvallur",
    },
    {
        id: "a66db5fb-6e26-4615-9ec2-81f8c566872f",
        college: "RAJARAJESWARI COLLEGE OF ENGINEERING, Bengaluru",
    },
    {
        id: "7235f080-41e5-4bf9-9d27-b44c861f5b27",
        college:
            "Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal",
    },
    {
        id: "fccf5772-271b-4e4c-827a-92383d6b967a",
        college: "Rajendra Mane College of Engineering & Technology, Devrukh",
    },
    {
        id: "ffe65f27-c33d-42c3-a937-a8fa4415403e",
        college: "Rajiv Gandhi College of Engineering and Research, Nagpur",
    },
    {
        id: "2344281c-77e2-41fd-a61f-c5485de8d2fa",
        college:
            "RAJIV GANDHI COLLEGE OF ENGINEERING AND TECHNOLOGY, PUDUCHERRY",
    },
    {
        id: "0e316381-aad1-41f3-bdff-35cc32cb59a2",
        college:
            "Rajiv Gandhi College of Engineering, Research and Technology, Chandrapur",
    },
    {
        id: "a00675cf-99d0-4aef-b4a0-654ebb562fd3",
        college: "Rajiv Gandhi Institute of Petroleum Technology, Amethi",
    },
    {
        id: "1a9b33cf-6a7b-4ad8-bbc6-444e738dd00b",
        college: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    },
    {
        id: "1770deb3-e334-4da6-8355-d33032ab9a3b",
        college: "Ramachandra College of Engineering, Eluru",
    },
    {
        id: "8131357f-2d44-4c00-957d-5deaae71941f",
        college: "RAMCO INSTITUTE OF TECHNOLOGY, Virudhunagar",
    },
    {
        id: "47cfe988-82a4-4bd7-8c1e-b4b11695b698",
        college: "RAMGOVIND INSTITUTE OF TECHNOLOGY, KODERMA, Koderma",
    },
    {
        id: "13910f34-98b0-4945-a6ef-992af8483f1e",
        college:
            "Rami Reddy Subbarami Reddy Engineering College, Sri Potti Sriramulu Nellore",
    },
    {
        id: "db9d0035-5c87-4362-a971-20c0362e8506",
        college: "Ramrao Adik Institute of Technology, Navi Mumbai",
    },
    {
        id: "5a881e67-6c72-4d3c-a0f3-151e2ebc0561",
        college: "RATHINAM TECHNICAL CAMPUS, Coimbatore",
    },
    {
        id: "6c4f943f-a82f-4f7e-8d24-14549838535c",
        college: "Ravindra College of Engineering for Women, Kurnool",
    },
    {
        id: "9d1005e8-4aa2-4f24-9213-908d2a8fe76c",
        college: "Rayalaseema University, Kurnool",
    },
    {
        id: "f2ee061b-6808-4267-b025-4779720f3330",
        college: "RAYAT BAHRA UNIVERSITY, Sahibzada Ajit Singh Nagar",
    },
    {
        id: "f36547d2-a34b-4369-a6b7-ed3de9738c7a",
        college: "RCC Institute of Information Technology, Kolkata",
    },
    {
        id: "1ad7bb19-8a82-4716-b22c-b1fe1f581f91",
        college: "Reva University, Bengaluru",
    },
    {
        id: "13e31c65-902c-4ae3-bc6f-69d46d8911c4",
        college: "Rewa Engineering College, Rewa",
    },
    {
        id: "64f11989-12c7-4cab-a2e3-f415a2277578",
        college: "RGUKT- RK Valley, vempalli",
    },
    {
        id: "2810e576-e581-4274-91f3-0a95c4fba32f",
        college: "RIMT University, Mandi Gobindgarh",
    },
    {
        id: "69aadcf7-8abd-47c7-845b-8bc5b552178b",
        college:
            "Rizvi Education Societys College of Engineering Bandra (West) Mumbai-400 051, Mumbai",
    },
    {
        id: "2b624766-ad06-49b2-b985-4ebc21c53022",
        college: "RNB Global University, Bikaner",
    },
    {
        id: "231d687b-cea7-450e-83c9-8277594cdf04",
        college: "Roever Engineering College, Elambalur",
    },
    {
        id: "7817fc4e-8d2a-4d31-be0a-25379caf4811",
        college: "ROHINI COLLEGE OF ENGINEERING AND TECHNOLOGY, Kanyakumari",
    },
    {
        id: "66a6f511-20e6-4b6d-9fb7-c423695fa744",
        college: "Roorkee College of Engineering, Roorkee",
    },
    {
        id: "865a4837-4451-4eed-becd-f55024ed6025",
        college: "Roorkee Institute of Technology, Roorkee",
    },
    {
        id: "d4e2eb7b-50d0-454f-bff6-98ff020de047",
        college: "RTC Institute of Technology, Ranchi",
    },
    {
        id: "33cd6512-f920-4230-9d26-4c0646e06686",
        college: "Rungta College of Engineering & Technology, Bhilai",
    },
    {
        id: "e8b54396-5303-4a00-9ebe-b697444319d9",
        college: "RVS College of Engineering and Technology, Coimbatore",
    },
    {
        id: "88d53738-2810-4de2-8303-42cbc741d607",
        college: "RVS Educational Trust's Group of Institutions, Coimbatore",
    },
    {
        id: "1d963491-77e6-4bf4-9497-c13498e98e1f",
        college: "S J C INSTITUTE OF TECHNOLOGY, Chickballapur",
    },
    {
        id: "9a70bc0c-8928-4895-8957-4f655537d1eb",
        college: "S. A. Engineering College, Thiruvallur",
    },
    {
        id: "8c2c8cdb-afbd-4066-878a-3d8a35915d32",
        college:
            "S. B. Jain Institute of Technology Management and Research, Nagpur",
    },
    {
        id: "da7a5ff8-bb9c-4265-85ae-652ae81788bf",
        college: "S. B. PATIL COLLEGE OF ENGINEERING, Indapur",
    },
    {
        id: "a36360d3-d13a-4693-834e-52db7c34ed28",
        college: "S. D. M. College of Engineering & Technology, Dharwad",
    },
    {
        id: "b696d8fa-00ab-4d89-baef-3933eb037999",
        college: "S. R. M. Institute of Science and Technology, Chennai",
    },
    {
        id: "30c27688-4c28-438b-a7e6-d980c59b918f",
        college: "S. V. S. College of Engineering, Coimbatore",
    },
    {
        id: "5b4265bc-c15f-499a-8fd8-46bd21e27394",
        college: "Sagar Institute Of Research &  Technology, Bhopal",
    },
    {
        id: "836e7f63-2311-4389-bef6-299623546d92",
        college:
            "Sagar Institute of Science Technology & Research (SISTEC-R), Bhopal",
    },
    {
        id: "9dd122a5-eab7-4307-b36e-3e925c15bf8e",
        college: "Sagi Rama Krishnam Raju Engineering College, Bhimavaram",
    },
    {
        id: "30536785-9730-422c-ac90-b4271765ce82",
        college:
            "SAHAKAR MAHARSHI SHANKARRAO MOHITE PATIL INSTITUTE OF TECHNOLOGY AND RESEARCH, SHANKARNAGAR, Akluj",
    },
    {
        id: "819e76b6-9fa9-4353-bc31-f4b78833da36",
        college: "Sahrdaya College of Engineering & Technology, Kodakara",
    },
    {
        id: "e78c8c0f-40b4-4cfd-b538-84c94e6028f1",
        college: "Sahyadri College of Engineering & Management, Mangalore",
    },
    {
        id: "b5ddf843-7d35-4918-8da1-90bebb51f6a0",
        college: "SAHYADRI VALLEY COLLEGE OF ENGINEERING & TECHNOLOGY, RAJURI",
    },
    {
        id: "e65bdb63-cef4-4743-9e03-5feeb846e576",
        college: "SAI RAJESWARI INSTITUTE OF  TECHNOLOGY, Proddatur",
    },
    {
        id: "4d549213-b31d-4138-aca3-6d5991bff493",
        college:
            "Sai Samajik Santha Sanchalit College of Engineering, Aurangabad",
    },
    {
        id: "3d8145bb-2095-47a3-b460-c7888142d27a",
        college:
            "SAI TIRUMALA NALABOTHU VENKATA RAO ENGINEERING COLLEGE, Guntur",
    },
    {
        id: "9cb695f6-7d8b-43a0-bfa3-12772d903b19",
        college: "Sai Vidya Institute of Technology, Bengaluru",
    },
    {
        id: "028d9d8e-8b91-468e-979a-8a5c89ea62b5",
        college: "Saintgits College of Engineering, Kottayam",
    },
    {
        id: "3581d242-a1ba-4364-a959-1f4486df9b24",
        college:
            "SAL INSTITUTE OF TECHNOLOGY & ENGINEERING RESEARCH, Ahmedabad",
    },
    {
        id: "0b50ca42-1358-4205-a2ec-a24f9b994614",
        college:
            "Sam Higginbottom Institute of Agriculture, Technology & Sciences, Allahabad",
    },
    {
        id: "7a292591-0299-4a6c-b1bf-4a97ea941487",
        college: "Samskruti College of Engineering & Technology, Rangareddy",
    },
    {
        id: "4d17a363-e984-4a58-8786-ee84e216f4ad",
        college:
            "SANJIVANI RURAL EDUCATION SOCIETY'S COLLEGE OF ENGINEERING, Kopargaon",
    },
    {
        id: "0f26e885-1349-49c8-9ac2-b03d9583a8c3",
        college:
            "Sanketika Institute of Technology and Management, Visakhapatnam",
    },
    {
        id: "df27abd4-05ed-4e27-9450-ca83892c03ef",
        college: "Sanketika Vidya Parishad Engineering College, Visakhapatnam",
    },
    {
        id: "27442302-59d7-4109-96fc-c3a5d7256a99",
        college: "Sanmati Engineering College, Sawargaon",
    },
    {
        id: "fa8ec0fc-6e7f-4cb1-a071-bdd476d92afe",
        college: "Sanskrithi School of Engineering, Puttaparthi",
    },
    {
        id: "8ea5c1ae-0ae2-47f8-899a-d1fed953045c",
        college:
            "Sant Longowal Institute of Engineering & Technology, Longowal",
    },
    {
        id: "fa908bb0-c910-4f79-8e69-7148511dc75a",
        college: "Santhiram Engineering College, Nandyal",
    },
    {
        id: "cf11e410-ecf0-4908-962b-790dad8a1515",
        college: "SARANATHAN COLLEGE OF ENGINEERING, Tiruchirappalli",
    },
    {
        id: "ab67d278-7e97-4b8b-86fe-6cf61f20888b",
        college:
            "Saraswati Education Society's Saraswati College of Engineering, Navi Mumbai",
    },
    {
        id: "c4411c40-800b-4b54-a3fd-9a4530f2dfa9",
        college: "Sardar Patel College of Engineering, Mumbai",
    },
    {
        id: "a231bf33-4e78-4c56-b4ec-bd3759a61d87",
        college: "Sardar Vallabhbhai National Institute of Technology, Surat",
    },
    {
        id: "65a0d14d-14e4-4e73-97c6-41ea72bb355b",
        college:
            "Sardarkrushinagar Dantiwada Agricultural University, PALANPUR",
    },
    {
        id: "23cf8084-f598-40bb-8801-21e01616b155",
        college: "Sarvajanik College of Engineering & Technology, Surat",
    },
    {
        id: "87dc2666-9b5c-4e45-b801-aac4e71beb4c",
        college: "Sasi Institute of Technology & Engineering, Tadepalligudem",
    },
    {
        id: "3050e1c3-ea86-41b2-b3ae-c0cebd3cc734",
        college: "Sasurie College of Engineering, Tiruppur",
    },
    {
        id: "2d4fe2e4-20fc-422b-a671-cc496091df91",
        college: "Sathyabama Institute of Science and Technology, Chennai",
    },
    {
        id: "7c200152-ac48-496f-b759-ddf10ca58cf7",
        college: "Satya Institute of Technology and Managemnet, Gajularega",
    },
    {
        id: "743ab7a2-db0d-4d31-9a1a-1b5a5f4c591d",
        college: "Saveetha Engineering College, Sriperumbudur",
    },
    {
        id: "91bfcc5e-0f74-4608-913a-9e64b904741e",
        college:
            "Saveetha Institute of Medical and Technical Sciences, Chennai",
    },
    {
        id: "c55d2d14-0fd0-470e-bc95-894826b84f80",
        college: "SCAD Institute of Technology, Tiruppur",
    },
    {
        id: "d30a77e1-357c-481b-a0d8-647c46ef8ea6",
        college: "SCHOLAR'S INSTITUTE OF TECHNOLOGY & MANAGEMENT, Guwahati",
    },
    {
        id: "1285a539-07fc-413c-9a39-95ce220e0447",
        college: "SCHOOL OF ENGINEERING AND TECHNOLOGY, Soldha",
    },
    {
        id: "d4c8ed3c-2b3d-42d6-bd91-3137ff31a058",
        college:
            "School of Engineering, Cochin University of Science and Technology, Cochin",
    },
    {
        id: "4764bc43-eed9-4432-841f-82aaf3d95318",
        college: "SCMS School of Engineering & Technology, Cochin",
    },
    {
        id: "8c6fa16b-4bd9-4753-8575-5480305b3db5",
        college: "Scope College of Engineering, Bhopal",
    },
    {
        id: "63988ca5-f8f1-451f-905c-637c00b992c6",
        college: "SCTR's Pune Institute of Computer Technology, Pune",
    },
    {
        id: "f8043985-50bf-412f-a09c-06971e4f7c23",
        college: "Sengunthar College of Engineering, Tiruchengode",
    },
    {
        id: "7f8b524e-7e08-45a4-9402-264646c40f3f",
        college: "Sengunthar Engineering College, Tiruchengode",
    },
    {
        id: "0e853f6e-c85e-4951-91e1-5625972017d7",
        college: "Seshachala Institute of Technology, Puttur",
    },
    {
        id: "4e176366-ec5b-4839-8890-ff55a542a017",
        college: "SES's R. C. Patel Institute of Technology, Shirpur",
    },
    {
        id: "4a3596e6-0bc7-4234-937c-83ffeb9f3198",
        college:
            "Seth Jai Parkash Mukand Lal Inst. of Engineering & Technology, Yamunanagar",
    },
    {
        id: "771574e0-afe8-4433-81de-4c1284161edb",
        college: "Sethu Institute of Technology, Virudhunagar",
    },
    {
        id: "7a8fca20-003f-45b2-9ae5-e0c87008e380",
        college:
            "SF's Sandip Institute of Technology and Research Centre, Mahiravani",
    },
    {
        id: "9b692568-1ce2-4db2-bc81-248514ed6560",
        college: "Shadan College of Engineering & Technology, Hyderabad",
    },
    {
        id: "dacfdbb7-6fec-4c92-9b89-9030fb201fe0",
        college: "Shah & Anchor Kutchhi Engineering College, Mumbai Suburban",
    },
    {
        id: "1cb96eb0-a723-43eb-a06d-85ae9ae48e61",
        college: "Shaheed Bhagat Singh State Technical Campus, Ferozepur",
    },
    {
        id: "c007b67a-500f-4c30-b06e-e754e06df10c",
        college:
            "Shaheed Udham Singh College of Engg. and Tech, Tangori, Sahibzada Ajit Singh Nagar",
    },
    {
        id: "530cbb23-d160-4bbf-a7cc-04bc219936dd",
        college:
            "Shanmugha Arts Science Technology & Research Academy, Thanjavur",
    },
    {
        id: "c295ba6e-1a0a-4052-86fa-2aeb73849e40",
        college: "Shantilal Shah Engineering College, Bhavnagar",
    },
    {
        id: "4b1092cf-a3f8-4150-a1d4-11a1150fd837",
        college: "Sharda University, Greater Noida",
    },
    {
        id: "33483fb2-af2e-47d9-a08d-716062e080ad",
        college: "Sharnbasva University, Kalaburagi",
    },
    {
        id: "e62ba939-13e3-4716-b0e0-494c21c01ec3",
        college: "Shivalik College of Engg., Dehradun",
    },
    {
        id: "6615661e-bc03-47e8-b74e-e6841cfc09fe",
        college: "Shobhit-University, Meerut",
    },
    {
        id: "12983e04-06fd-44c6-ad99-b50025afcc16",
        college:
            "Shoolini University of Biotechnology and Management Sciences, Solan",
    },
    {
        id: "e7ce3413-8985-4811-ac3c-034d75430f8d",
        college:
            "Shree Chanakya Education Society's Indira College of Engineering & Management, Pune",
    },
    {
        id: "5b46b843-72ae-4306-84e4-95ead38e9e23",
        college:
            "Shree Rama Educational Society Group of Institutions, Tirupati",
    },
    {
        id: "eabcea9e-a2df-45dd-9963-31935f99b441",
        college:
            "SHREE SWAMI ATMANAND SARASWATI INSTITUTE OF TECHNOLOGY, Surat",
    },
    {
        id: "bfd2fd44-4e7a-45b8-924a-c250dad44c75",
        college: "Shree Venkateshwara Hi-Tech Engineering College, Erode",
    },
    {
        id: "966f323a-1b44-4a5f-bbe0-3cfe2c37eb8f",
        college:
            "SHRI AMBABAI TALIM SANSTHA'S SANJAY BHOKRE GROUP OF INSTITUTES, MIRAJ, Sangli",
    },
    {
        id: "322f381a-1a6e-4b8b-a698-389f59065f98",
        college:
            "Shri Balasaheb Mane Shikshan Prasarak Mandal Ambap's Ashokrao Mane Group  of Institutions, Kolhapur",
    },
    {
        id: "e47562f3-6f7e-428b-a23b-ba8e35491d18",
        college: "Shri G. S. Institute of Technology & Science, Indore",
    },
    {
        id: "c345611d-f96e-429a-8867-cc2d2cb5e516",
        college:
            "Shri Labhubhai Trivedi Institute of Engineering and Technology, Rajkot",
    },
    {
        id: "7dd61a9a-b3ea-4b5f-8059-674ef9ed58bb",
        college:
            "SHRI MADHWA VADIRAJA INSTITUTE OF TECHNOLOGY AND MANAGEMENT, Bantakal",
    },
    {
        id: "1ce1b36b-7961-476a-a428-b645e7a49d3a",
        college: "Shri Mata Vaishno Devi University, Katra",
    },
    {
        id: "f5915496-2693-416f-8922-55f6a8f7e80a",
        college:
            "Shri Neminath Jain Brahmacharyashramas College of Engineering, Nashik",
    },
    {
        id: "d777853d-a592-4be3-adf4-6117674312c7",
        college:
            "Shri Ram Murti Smarak College of Engineering & Technology, Bareilly",
    },
    {
        id: "8ea27147-1431-4634-8d9f-13b8969a7c7d",
        college:
            "Shri Ramdeobaba College of Engineering and Management, Nagpur",
    },
    {
        id: "35a4e782-3647-4c9b-9533-b2f154948c98",
        college: "Shri Ramswaroop Memorial University, Bararbanki",
    },
    {
        id: "2ff0603e-c694-42b9-88a6-b4a903583fff",
        college: "SHRI SHANKARACHARYA ENGINEERING COLLEGE, Bhilai",
    },
    {
        id: "9c69f049-5ba3-47b1-92bf-681172a436f5",
        college: "Shri Shankaracharya Group of Institutions, Bhilai",
    },
    {
        id: "26e93bea-951f-488c-a3ed-d3ed65202be8",
        college:
            "Shri Shankaracharya Institute of Professional Management & Technology, Raipur",
    },
    {
        id: "cb29d2c6-fdbe-421a-a509-6829a63952b2",
        college:
            "Shri Shirdi Sai Institute of Science and Engineering, Anantapur",
    },
    {
        id: "7decb22f-ded2-465d-8166-9935cc67f5ae",
        college:
            "SHRI SHIVAJI VIDYA PRASARAK SANSTHA'S LATE BAPUSAHEB SHIVAJIRAO DEORE COLLEGE OF ENGINEERING, Dhule",
    },
    {
        id: "01a227ac-2fc5-4f08-8ebc-b70c940a6459",
        college: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
    },
    {
        id: "d1ee190e-2587-4a79-acac-4f5733be4868",
        college:
            "Shri Vile Parle Kelavani Mandal's  Dwarkadas J. Sanghvi College of Engineering, Mumbai Suburban",
    },
    {
        id: "e69c17c4-477e-4ef5-9206-0552e564f9a5",
        college: "Shri Vishnu Engineering College for Women, Bhimavaram",
    },
    {
        id: "6272b574-82e8-4956-9b8f-844cecc2cba1",
        college: "Shroff S. R. Rotary Institute of Chemical Technology, Valia",
    },
    {
        id: "ace966d3-0645-4cfa-a347-aa7c26c68587",
        college: "Siddaganga Institute of Technology, Tumkur",
    },
    {
        id: "6000b6b2-e8ea-430a-b985-c03694cd1537",
        college: "Siddharth Institute of Engineering & Technology, PUTTUR",
    },
    {
        id: "6ba5ce3b-7768-42bc-87df-37e9517b4ed8",
        college: "Siddhartha Institute of Technology & Science, HYDERABAD",
    },
    {
        id: "ec6ead5e-5481-4cc0-b054-5cbade22c7e5",
        college: "Siddhivinayak Technical Campus, Shegaon",
    },
    {
        id: "b42dc3bd-76b8-4485-aef0-b30b1f28dd28",
        college: "SIES Graduate School of Technology, Navi Mumbai",
    },
    {
        id: "26ddf1ca-004d-4981-8bde-5d422bc26469",
        college: "Sikkim Manipal Institute of Technology (SMIT), Rangpo",
    },
    {
        id: "2c12b2f5-4e5e-40ce-b817-b5dd15fc4fc2",
        college: "Siksha 'O' Anusandhan, Bhubaneswar",
    },
    {
        id: "cb783012-2369-4833-a4fc-36267ff87870",
        college:
            "Silicon Institute of Technology (SIT), Bhubaneswar, Bhubaneswar",
    },
    {
        id: "a75822d6-c4d1-4203-b477-21deb478baf6",
        college: "Sinhgad Academy of Engineering, Pune",
    },
    {
        id: "2acb34d8-47e3-484c-b0b4-a98881264248",
        college: "Sinhgad College of Engineering, Pune",
    },
    {
        id: "026dcc71-29e4-4d11-aad5-5ca93d0cff36",
        college:
            "Sinhgad Technical Education Society's Sinhgad Institute of Technology, Pune",
    },
    {
        id: "01af7602-7fe9-4f21-aff1-4e3c8505866a",
        college:
            "Sinhgad Technical Education Society's Sinhgad Institute of Technology & Science, Pune",
    },
    {
        id: "d532b5f2-3a74-45bc-aabb-4d19f683e704",
        college:
            "Sinhgad Technical Education Society's SKN Sinhgad Institute of Technology and Science, Pune",
    },
    {
        id: "c95ab891-894d-4ff0-a10f-6fc744279eae",
        college:
            "Sipna College of Engineering and Technology, Amravati , Amravati",
    },
    {
        id: "c3a1a8c3-5fb2-41e8-972f-e41f80a4a28b",
        college: "Sir C. R. R. College of Engineerng, West Godavari",
    },
    {
        id: "8d559c32-5181-4637-9ec5-cbcfa163d911",
        college:
            "Sir C. V. Raman Institute of Technology & Sciences, Tadipatri",
    },
    {
        id: "c12179c9-0d90-483a-ab6b-2bff03a4f12f",
        college: "Sir M Visvesvaraya Institute of Technology, Bengaluru",
    },
    {
        id: "29f46dac-60fc-43de-a23f-93b43dee1e50",
        college: "Sir Padmapat Singhania University, Udaipur",
    },
    {
        id: "83cd8ad7-a3dc-4f5d-8fc2-48bde2358652",
        college:
            "Sir Vishveshwaraiah Institute of Science & Technology, Chittoor",
    },
    {
        id: "bdac5a6a-e6e2-47ad-897d-48bb8026eba7",
        college: "SJB INSTITUTE OF TECHNOLOGY, Bengaluru",
    },
    {
        id: "b8516c0a-fdb1-409f-851e-5f0351543f17",
        college: "SKR College of Engineering & Technology, Nellore",
    },
    {
        id: "da3c19f8-1110-4e70-90b9-3aa33e907740",
        college:
            "Smt. Kamala & Vekappa  M Agadi College of Engg. & Technology, Lakshmeshwara, Laxmeshwar",
    },
    {
        id: "b17e441c-1d9b-452f-838b-fe6fd63d61c0",
        college: "Smt. Kashibai Navale College of Engineering, Pune",
    },
    {
        id: "c346bd47-6276-4008-a5ae-066c5ec11554",
        college: "Smt. Nathibai Damodar Thackersey Women's Univeristy, Mumbai",
    },
    {
        id: "7441a21c-1bf6-4d0d-98f1-b1b16d77088f",
        college: "SNS College of Engineering, Coimbatore",
    },
    {
        id: "2a6c6dcd-37ea-4f9e-87e8-b9c86a928b81",
        college: "SNS College of Technology, Coimbatore",
    },
    {
        id: "03a474b5-d730-4c69-b0d4-22a7b8e25128",
        college: "Sona College of Technology, Salem",
    },
    {
        id: "833211ab-efc4-4af3-a25c-03ebce2b368f",
        college:
            "Sou. Sushila Danchand Ghodawat Charitable Trust's Sanjay Ghodawat Group of Institutions, Atigre",
    },
    {
        id: "19358a2c-fcd6-4935-9a23-9d5219533deb",
        college: "Sphoorthy Engineering College, Hyderabad",
    },
    {
        id: "e3365ea3-5b31-42c9-b59c-eb991776cb8a",
        college: "SR Engineering College\r\n, Warangal",
    },
    {
        id: "1769f30c-8a5d-4c16-8cb0-3c655ea1697b",
        college: "SREE BUDDHA COLLEGE OF ENGINEERING FOR WOMEN, Elavumthitta",
    },
    {
        id: "cfe4fdc1-46a9-4af4-ab47-6b0e3b19458b",
        college: "SREE BUDDHA COLLEGE OF ENGINEERING, PATTOOR, Pattoor",
    },
    {
        id: "0c116a0c-88aa-4732-ab6f-373a04842e8c",
        college: "Sree Chaitanya College of Engineering, Karimnagar",
    },
    {
        id: "81ae6a49-f2f6-41b4-bfd7-2086d5f42bf5",
        college:
            "Sree Chitra Thirunal College of Engineering, Pappanamcode, Thiruvanthapuram, Thiruvananthapuram",
    },
    {
        id: "7c8e77db-733e-410f-8b92-f47491a6d6c1",
        college: "Sree Rama Engineering College, Tirupati",
    },
    {
        id: "0f9cba75-47d0-4ea0-b566-3f2116a3d26d",
        college:
            "Sree Sastha Institute of Engineering and Technology, Chembarambakkam",
    },
    {
        id: "2bede54a-5f94-4ead-81e5-eae3b7cfbd53",
        college: "Sree Sowdambika College of Engineering, Aruppukottai",
    },
    {
        id: "ab98b081-3fdf-462e-9f3e-a389b3367534",
        college: "Sree Venkateswara College of Engineering, Kodavaluru",
    },
    {
        id: "f69e0212-0b63-4ced-976f-a5d01889a986",
        college: "Sree Vidyanikethan Engineering College, A.Rangampet",
    },
    {
        id: "3279bdd5-32d7-4ec1-a25e-49d291d86c2f",
        college: "Sreenidi Institute of Science &Technology, Rangareddy",
    },
    {
        id: "c9846bea-ca1a-479a-aa40-7f03c7eaec47",
        college:
            "Sreenivasa Institute of Technology and Management Studies, Chittoor",
    },
    {
        id: "8d88ca16-d9a3-45ac-a50d-f0cfa50abbcc",
        college:
            "SREEPATHY INSTITUTE OF MANAGEMENT & TECHNOLOGY, VAVANOOR, KOOTTANAD",
    },
    {
        id: "53cf7ac4-233b-42b8-bd53-5f5d7ba00629",
        college: "Sreyas Institute of Engineering & Technology, Hyderabad",
    },
    {
        id: "d7f56d98-72d8-47a3-8ef3-10efb241ce12",
        college:
            "Sri  Venkateswara  College of Engineering, Karambadi road, Tirupati, Tirupati",
    },
    {
        id: "945adb6a-4ebd-4ade-a61a-9152678e8448",
        college:
            "Sri Channabasaveshwara Institute of Technology, GUBBI, Tumkur",
    },
    {
        id: "7a2a08cd-c14b-4296-993d-4ca6fe53c379",
        college: "Sri Eshwar College of Engineering, Coimbatore",
    },
    {
        id: "a16ebbe6-30c6-4413-a199-c76b993f4182",
        college:
            "Sri Krishna College of Engineering and Technology, Coimbatore",
    },
    {
        id: "01445624-002a-4bac-b9dd-0df23e89436f",
        college: "Sri Krishna College of Technology, Coimbatore",
    },
    {
        id: "57e4c47c-579b-4e79-a989-fb50e482dea8",
        college: "Sri Manakula Vinayagar Engineering College, Puducherry",
    },
    {
        id: "29c41778-2a7e-4abc-bcf7-24dcaf8e2277",
        college: "Sri Mittapalli College of Engineering, Guntur",
    },
    {
        id: "ca25bf47-77e2-4390-82fa-b576b4b8f048",
        college: "Sri Mittapalli Institute of Technology for Women, Guntur",
    },
    {
        id: "90779421-76ff-499f-92dc-93174786f6e6",
        college: "Sri Muthukumaran Institute of Technology, Kancheepuram",
    },
    {
        id: "9414f13f-c9b0-4c0d-adff-67aa8808b854",
        college: "Sri Padmavathi Mahila Visva Vidyalayam, Tirupathi",
    },
    {
        id: "acbadd2f-022c-48f3-a777-e76efb2856d0",
        college: "Sri Ramakrishna Engineering College, Coimbatore",
    },
    {
        id: "91dec5a2-3797-42ad-9e78-1a0695a56d09",
        college: "Sri Ramakrishna Institute of Technology, Coimbatore",
    },
    {
        id: "850b5e4e-dbfa-4edf-822c-8849c11bcaf0",
        college: "Sri Sai Ram Institute of Technology, Chennai",
    },
    {
        id: "383e6886-d622-4d97-8dfb-72495407117e",
        college: "Sri Sairam College of Engineering, Bengaluru",
    },
    {
        id: "1cec909d-d843-4d3b-8150-709ce49dbfaf",
        college: "Sri Sairam Engineering College, Kancheepuram",
    },
    {
        id: "ef99d31c-0ad5-4a28-aeec-9f69b1f758a3",
        college:
            "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    },
    {
        id: "8fdce91c-d647-4a34-bada-b61357c605fc",
        college: "SRI SHANMUGHA COLLEGE OF ENGINEERING AND TECHNOLOGY, Sankari",
    },
    {
        id: "b8e64f3c-867e-4e13-83e0-31dd61c906d7",
        college: "Sri Siddhartha Institute of Technology, Tumkur., Tumkur",
    },
    {
        id: "ed4328ea-a204-4ca8-b5ec-a02cf1b3fdb0",
        college:
            "Sri Sivasubramaniya Nadar College of Engineering, Kancheepuram",
    },
    {
        id: "96d56a71-ddc9-4cd6-b8eb-cd2d06258bb4",
        college: "SRI VASAVI ENGINEERING COLLEGE, Tadepalligudem",
    },
    {
        id: "74155d24-481d-45da-b633-ebb9d0527d0f",
        college: "SRI VASAVI INSTITUTE OF ENGINEERING & TECHNOLOGY, Pedana",
    },
    {
        id: "c4183faa-e7ed-44f8-bab6-12e9dfd32443",
        college:
            "Sri Venkatesa Perumal College of Engineering & Technology, Puttur",
    },
    {
        id: "aa1aea4a-db9b-4e22-be3d-5acdfc5f8d48",
        college: "SRI VENKATESHWARA COLLEGE OF ENGINEERING, Bengaluru",
    },
    {
        id: "37a0d8e9-2893-4fae-9d99-fb791a57d9b0",
        college: "Sri Venkateswara College of Engineering, Kadapa",
    },
    {
        id: "69e1971c-db3e-4403-bbad-b8d557910fd7",
        college: "Sri Venkateswara College of Engineering, Kancheepuram",
    },
    {
        id: "ad463cca-2d96-484f-98af-554f4f3d32fa",
        college:
            "Sri Venkateswara College of Engineering & Technology, Chittoor",
    },
    {
        id: "ac8953f9-4a5e-44b9-83f9-fdfcefa8a2c2",
        college:
            "Sri Venkateswara College of Engineering and Technology, Etcherla",
    },
    {
        id: "323214c2-12ad-44d4-b6b5-80b83167131c",
        college: "SRI VENKATESWARA ENGINEERING COLLEGE FOR WOMEN, Tirupati",
    },
    {
        id: "63934747-3ad8-44ef-82f1-24792bf3eb48",
        college: "Sri Venkateswara Institute of Technology, Anantapur",
    },
    {
        id: "4f5c9b36-9443-4ea1-be0c-c25b7961166f",
        college: "Sri Venkateswara University, Tirupati",
    },
    {
        id: "ae08c138-b264-45b7-bcdc-b9302266edea",
        college:
            "Srinivasa Institute of Engineering and Technology, Amalapuram",
    },
    {
        id: "2f635f3a-5e8e-4914-a304-f8bda12dcc02",
        college:
            "Srinivasa Ramanujan Institute of Technology, Rotarypuram Village",
    },
    {
        id: "6cfe35a5-358e-4968-9fd3-514fdae9a1ed",
        college: "Sriram Engineering College, Chennai",
    },
    {
        id: "72082945-b7ca-4184-8e7e-fa76d2c97fc3",
        college: "SRM University, Sonepat",
    },
    {
        id: "ec6679f9-5236-4259-bec8-4dd89d43fce9",
        college: "SSBT's College of Engineering & Technology, Jalgaon",
    },
    {
        id: "e3fde6dc-dd0b-4985-be8c-f29b5728bdec",
        college: "SSM Institute of Engineering and Technology, Dindigul",
    },
    {
        id: "a6ada3ee-62a2-4772-88a1-ad69ac99328e",
        college:
            "St. Aloysius Institute of Technology,  Mandla Road, Jabalpur - 482001, Jabalpur",
    },
    {
        id: "93e7aa7c-ea3b-4975-a6ce-dba8be3c4f06",
        college: "St. Francis Institute of Technology, Mumbai",
    },
    {
        id: "f6a393fd-4c59-427b-ab00-113f85530eed",
        college: "St. Johns College of Engineering & Technology, Kurnool",
    },
    {
        id: "e82e8951-5024-4590-9125-4ff90c8a7ebd",
        college: "St. Joseph College of Engineering, Chennai",
    },
    {
        id: "da2ba055-876e-43f2-a534-36d2bd443bce",
        college: "ST. JOSEPH ENGINEERING COLLEGE, Mangaluru",
    },
    {
        id: "64ec597b-ee17-40e9-a24c-44483e5a3990",
        college: "St. Joseph's Institute of Technology, Chennai",
    },
    {
        id: "3de67b8a-e344-4ee3-80a7-7aa0b6863469",
        college: "St. Josephs College of Engineering, Kancheepuram",
    },
    {
        id: "c08add48-2227-4675-81af-f8d403c22d99",
        college: "St. Martin's Engineering College, Secunderabad",
    },
    {
        id: "7b70289c-1690-4b3b-8c44-9ab4f85e3edf",
        college: "St. Mary's Women's Engineering College Budumpadu, Guntur",
    },
    {
        id: "64627856-5665-442e-b4d0-e729b24e5ade",
        college: "St. Mary's Engineering College, Hyderabad",
    },
    {
        id: "d6e945db-6547-4863-a65f-9f471273c61c",
        college: "St. Mary's Group of Institutions, Guntur",
    },
    {
        id: "40ba4141-e220-4db4-9837-98819f4a830a",
        college: "St. Peter's College of Engineering and Technology, Avadi",
    },
    {
        id: "a0dafb44-8238-4389-bf6f-e8c0b3ea6a1c",
        college: "St. Peter's Engineering College, Rangareddy",
    },
    {
        id: "0657cb62-393d-4383-ab03-52f2b1dbc1ef",
        college:
            "St. Vincent Palloti College of Engineering and Technology, Nagpur",
    },
    {
        id: "8c3f46e3-1f9d-4279-a9e8-124817f6a55d",
        college: "St. Xavier's Catholic College of Engineering, Kanniyakumari",
    },
    {
        id: "a34bf3de-3241-4287-bea3-f6a40ffd523b",
        college:
            "Stanley College of Engineering & Technology for Women, Hyderabad",
    },
    {
        id: "ef99530b-1179-45d4-a677-345aa3c5e15c",
        college: "Supreme Knowledge Foundation Group of Institutions, Hugli",
    },
    {
        id: "150ed0e1-0b7f-43ea-b7af-fcd6f897298b",
        college: "Suresh Gyan Vihar University, Jaipur",
    },
    {
        id: "71f5b8fd-e4a9-414b-ae6c-1466f170e34d",
        college:
            "SVKM's Narsee Monjee Institute of Management Studies , Mumbai",
    },
    {
        id: "58fe000b-e6fb-4296-b74a-216ed8c49de3",
        college: "SVR Engineering College, Nandyal, Nandyal",
    },
    {
        id: "e4a4c2c6-c0f5-4ce7-b231-ab2b629f74a6",
        college:
            "Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur",
    },
    {
        id: "bec0cddb-e0ae-448d-9bf9-001b6722c8d4",
        college: "Swami Vivekananda Institute of Science & Technology, Kolkata",
    },
    {
        id: "4090e2c2-2803-493c-abcf-5f97491e0f59",
        college: "SWARNANDHRA COLLEGE OF ENGINEERING & TECHNOLOGY, Narsapur",
    },
    {
        id: "f7390035-1caa-4b9a-8dbe-544176a62624",
        college: "SYED AMMAL ENGINEERING COLLEGE, Ramanathapuram",
    },
    {
        id: "db75d2c2-4f92-4747-b810-55b2eab578b3",
        college: "Synergy Institute of Engineering & Technology, Dhenkanal",
    },
    {
        id: "3452b4a8-3f37-43d6-9998-af6b8fe1f5bb",
        college: "T. John Institute of Technology, Bengaluru",
    },
    {
        id: "cbb725c8-8c84-483c-88b9-cbdffdef10d1",
        college: "T. K. M. Institute of Technology, Kollam",
    },
    {
        id: "af5decbc-81c1-4fa3-b123-4f3a06271ae7",
        college: "Tagore Engineering College, Kancheepuram",
    },
    {
        id: "b01ce1c3-61a8-46bf-817f-fd23c2fe9a53",
        college: "Tagore Institute of Engineering and Technology, Attur",
    },
    {
        id: "7256d8f1-b5b1-4cbb-a4d8-dd9052d14323",
        college: "Tamil Nadu Fisheries University, Nagapattinam",
    },
    {
        id: "6d8ff22b-dd53-43a3-9d7a-24a7f205186e",
        college:
            "Tatyasaheb Kore Institute of Engineering & Technology, WARANANAGAR, Warananagar",
    },
    {
        id: "5724e576-ddbb-4d29-9b33-479786bdc932",
        college: "Techno India, Kolkata",
    },
    {
        id: "febfc95d-eea9-4f26-86b4-58320bd23784",
        college: "TECHNO INDIA CHAIBASA, Chaibasa",
    },
    {
        id: "31e72a39-d8da-4973-8f99-dc27de36cfc1",
        college: "TECHNO INTERNATIONAL  BATANAGAR, South Twenty Four Parganas",
    },
    {
        id: "d3414426-b79c-482c-a693-c926dea89175",
        college: "TECHNO INTERNATIONAL NEW  TOWN, North Twenty Four Parganas",
    },
    {
        id: "7fc99dea-d2dc-4fd0-86c0-32e5c72068ff",
        college: "Technocrats Institute Of Technology, Bhopal",
    },
    {
        id: "1e982fad-0392-47ca-8594-912cc056bf8c",
        college: "Technology Education & Research Institute,  Kurukshetra",
    },
    {
        id: "9a17486f-2af9-4176-a502-010b3c5f7386",
        college: "Teegala Krishna Reddy Engineering College, Rangareddy",
    },
    {
        id: "93246a4c-b1c5-41db-b4b9-f1788ad61510",
        college: "Teerthanker Mahaveer University, Moradabad",
    },
    {
        id: "ef506383-9380-46ae-850c-f8d7bf61f0e5",
        college:
            "Terna Public  Charitable Trust's Terna  Engineering  College, Mumbai",
    },
    {
        id: "e60be847-5206-402d-8045-6c9296ee93f2",
        college:
            "Terna Public Charitable Trust's College of Engineering, Osmanabad",
    },
    {
        id: "a1b8ba58-b7fe-4eb8-81d9-e4ff791cf5db",
        college: "Thadomal Shahani Engineering College, Mumbai",
    },
    {
        id: "14bb9024-5c02-4f00-96bc-d4337a25b404",
        college: "Thakur College of Engineering & Technology, Mumbai",
    },
    {
        id: "f703fd92-26d6-4b85-a5b1-3eb9cbacb6dc",
        college: "Thapar Institute of Engineering & Technology, Patiala",
    },
    {
        id: "ec50797a-ed6f-4dea-b264-23f453cbfdbe",
        college: "The Assam Kaziranga University, Jorhat",
    },
    {
        id: "5f7aa62f-8b83-40b5-b264-0744e9aa755a",
        college:
            "The Institute of Chartered Financial Analysts of India University, Agartala",
    },
    {
        id: "b92d7b48-6793-497a-9e64-96a78f0069d8",
        college:
            "The Institute of Chartered Financial Ayalysts of India University, Ranchi, Ranchi",
    },
    {
        id: "0e3c1d77-dfe2-4dfe-aa1a-aa49012e3e5e",
        college: "The LNM Institute of Information Technology, Jaipur",
    },
    {
        id: "f5b89483-60de-4935-b9ed-557ff586a93e",
        college: "The National Institute of Engineering, Mysore",
    },
    {
        id: "728b2588-c923-4741-a35b-6fef6fca4233",
        college: "The Northcap University, Gurgaon",
    },
    {
        id: "1574edfb-fa17-4e92-bb78-a4424d962715",
        college: "The Oxford College of Engineering, Bengaluru",
    },
    {
        id: "8858d6d0-7891-4234-bc84-8d0c7a3dc389",
        college: "The Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur",
    },
    {
        id: "f9c0995e-f571-48fd-b7c9-ca71dd600bad",
        college: "THENI KAMMAVAR SANGAM COLLEGE OF TECHNOLOGY, Koduvilarpatti",
    },
    {
        id: "38184211-39ae-4084-b55e-efc632032e64",
        college: "Thiagarajar College of Engineering, Madurai",
    },
    {
        id: "b9f4e96a-1f23-4e9f-9b9b-6c47c7a8b970",
        college:
            "Thiruvalluvar College of Engineering and Technology, Tiruvannamalai",
    },
    {
        id: "a7cace50-d7d9-4452-b9da-4d3d9db559bb",
        college: "TKM College of Engineering, Kollam",
    },
    {
        id: "44002489-a946-4570-b98c-f9edb31f96da",
        college: "TKR College of Engineering & Technology, Hyderabad",
    },
    {
        id: "125dba8e-9194-42a8-a1c0-433c59602fd3",
        college: "Tontadarya College of Engineering, Gadag",
    },
    {
        id: "dae50b1d-0567-437d-8f1d-e7dc4dce76c7",
        college:
            "Transnational Knowledge Society's Group of Institutions, Indore",
    },
    {
        id: "9d9ef5c4-cc6b-4ea3-b3b1-ed945481c3d1",
        college: "Trident Academy of Technology (TAT), Bhubaneswar",
    },
    {
        id: "6b497b27-ed6b-4f32-9ffe-d2aee6c358d3",
        college: "Tripura Institute of Technology, Agartala",
    },
    {
        id: "d129cf7d-b94e-421e-ad52-acb3df619d1b",
        college:
            "Tulsiramji gaidwad patil institute of Engneerind and Technology, Mohgaon, Nagpur",
    },
    {
        id: "3cf0e860-1d5f-4597-9848-9cf928df5f71",
        college: "Ujjain Engineering College, Ujjain",
    },
    {
        id: "69b95c2e-8fb8-4ae2-a5fa-a125559417a5",
        college: "UNITED INSTITUTE OF TECHNOLOGY, Coimbatore",
    },
    {
        id: "a6c96dec-44db-405a-8626-b77c798d0c5a",
        college:
            "Universal Institute of Engg. & Technology , Vill Ballopur, Lalru, Sahibzada Ajit Singh Nagar",
    },
    {
        id: "5beb736b-c389-4d6c-9c3a-2cb48e05c139",
        college: "University College of Engineering, Hyderabad",
    },
    {
        id: "c401ba0e-21cf-480e-b16e-4ec387a8f10f",
        college: "University College of Engineering, Vizianagaram",
    },
    {
        id: "e63eaced-8a04-4399-818c-923fbefd24b7",
        college: "University College of Engineering, Kakinada",
    },
    {
        id: "830195f6-0024-40d4-929a-d71369342ca9",
        college:
            "UNIVERSITY COLLEGE OF ENGINEERING, BIT CAMPUS TIRUCHIRAPPALLI, TIRUCHIRAPPALLI",
    },
    {
        id: "058e869f-a2fc-4467-96af-2b90a87490f4",
        college: "University College of Technology (Autonomous), Hyderabad",
    },
    {
        id: "ab7ac400-d592-4b68-bc00-c386dda4c9ca",
        college: "University Institute of Chemical Technology, Jalgaon",
    },
    {
        id: "f298c0f2-fd7a-4e4f-9804-05ce9dba8a01",
        college: "University of Engineering & Management (UEM), Jaipur",
    },
    {
        id: "c5ea3edb-e7d5-415a-8286-36be9b4cdd21",
        college: "University of Petroleum and Energy Studies, Dehradun",
    },
    {
        id: "749e5848-3531-4380-b68b-5162282401b9",
        college: "Usha Rama College of Engineering & Technology, Krishna",
    },
    {
        id: "2e964cbb-f2ad-4127-adb0-35f6e48d65d3",
        college: "Uttaranchal University, Dehradun",
    },
    {
        id: "278bf50a-2fe5-4f57-a76f-fb2c7ab4056f",
        college: "V. S. B. Engineering College, Karur",
    },
    {
        id: "83c642ca-3f1e-4557-84df-ce5dbe2f8083",
        college: "V. V. College of Engineering, Tirunelveli",
    },
    {
        id: "018096e5-eeb5-4274-a1f3-02dbdc695d60",
        college: "V.R.S & Y.R.N COLLEGE OF ENGINEERING AND TECHNOLOGY, Chirala",
    },
    {
        id: "b38142f3-838f-4dd5-bcd5-e8013fae5db5",
        college: "V.R.S. COLLEGE OF ENGINEERING AND TECHNOLOGY, VILUPPURAM",
    },
    {
        id: "1f59c8b3-2023-46c8-be8a-be46bab864a3",
        college:
            "V.S.M College of Engineering and Technology, Ramachandrapuram",
    },
    {
        id: "ef73b8ec-6da9-4bfd-b96b-40e99e09d684",
        college: "Vaagdevi Institute of Technology and Science, Proddatur",
    },
    {
        id: "c641c58c-aac5-4d92-8b7b-3139a67962ed",
        college:
            "Valia Koonambaikulathamma College of Engineering and Technology, Parippally",
    },
    {
        id: "874cab1f-fa75-4bc7-b187-5ccf617e72ae",
        college: "VALLIAMMAI ENGINEERING COLLEGE, Chennai",
    },
    {
        id: "88807729-0764-4351-b7d3-d3d2d8a88f2c",
        college:
            "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology, Hyderabad",
    },
    {
        id: "5be9add5-df59-4a09-b2b3-35743d41b647",
        college: "Vardhaman College of Engineering, Rangareddy",
    },
    {
        id: "d688f603-c3ca-4d02-abe2-daa3adc08f2e",
        college: "Vasavi College of Engineering, Hyderabad",
    },
    {
        id: "580c4abd-798b-4de9-9d2b-92bbba441507",
        college: "Vasireddy Venkatadri Institute of Technology, Guntur",
    },
    {
        id: "f831da5d-a539-41e0-911c-67b0f3e9c4a8",
        college: "VEDANT COLLEGE OF ENGINEERING & TECHNOLOGY, Bundi",
    },
    {
        id: "09cc5445-264c-439c-8e83-92fc6ea8d098",
        college: "VEDICA INSTITUTE OF TECHNOLOGY, Bhopal",
    },
    {
        id: "6561c375-5c90-45da-89c2-40301e557736",
        college: "Veer Surendra Sai University of Technology, Burla",
    },
    {
        id: "39117867-8509-4d48-a059-c8305331b724",
        college: "Veermata Jijabai Technological Institute, Mumbai",
    },
    { id: "cfd9843a-eced-4281-8174-e43d013206d1", college: "Vel Tech, Morai" },
    {
        id: "b5a5a0ce-92e1-44db-812a-9db483e2ab24",
        college:
            "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Morai",
    },
    {
        id: "ca48498b-a667-428f-b87a-879adae971dc",
        college:
            "VEL TECH MULTI TECH DR.RANGARAJAN DR.SAKUNTHALA ENGINEERING COLLEGE, Morai",
    },
    {
        id: "a8a7dc1a-4230-4679-b4f0-15d69ac2280c",
        college:
            "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology, Chennai",
    },
    {
        id: "fb051eb5-a95a-4421-ae7b-625866804178",
        college:
            "Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada",
    },
    {
        id: "95239818-5a66-4d2b-b8e6-0c3525ee7c01",
        college: "Velalar College of Engineering and Technology, Erode",
    },
    {
        id: "323f35b6-3d19-4fb3-8ba5-7e5127b5da22",
        college: "Velammal College of Engineering & Technology, Madurai",
    },
    {
        id: "35aa2b3a-c3a0-4a98-9f7d-a1762cfe6cdc",
        college: "Velammal Engineering College, Chennai",
    },
    {
        id: "7e1d0a3b-c367-419c-97a1-a87b34ed41ad",
        college: "Velammal Institute of Technology, Thiruvallur",
    },
    {
        id: "08126532-4f79-4c8a-bbe6-2411ac84ec96",
        college: "Vellore Institute of Technology, Vellore",
    },
    {
        id: "521d1ee2-ab34-4b84-9065-4e9cccf57ef4",
        college:
            "Vels Institute of Science, Technology & Advanced Studies (VISTAS), Chennai",
    },
    {
        id: "229f9cc7-1121-49ea-a6c2-9d0d4e546c8b",
        college: "Vemana Institute of Technology, Bengaluru",
    },
    {
        id: "fe06dffe-416d-4282-bc69-2caf7e5a9ffe",
        college: "Vemu Institute of Technology, Chittoor",
    },
    {
        id: "28f99e78-a14d-4ddb-b495-c4fa39a62170",
        college: "Vidya Jyothi Institute of Technology, Hyderabad",
    },
    {
        id: "4417328e-e560-4e44-887d-9498fc5e7a20",
        college:
            "VIDYA PRASARAK MANDAL'S MAHARSHI PARSHURAM COLLEGE OF ENGINEERING, Velneshwar",
    },
    {
        id: "4054022e-e149-4923-a520-d42877fea646",
        college:
            "Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering & Technology, Baramati, M.I.D.C.road, District - Pune, BARAMATI",
    },
    {
        id: "14ad215b-e0aa-48f1-b2fb-ab9f53d78222",
        college: "Vidya Vardhaka College of Engineering, MYSORE, Mysuru",
    },
    {
        id: "d0af6093-a1f0-4023-91e6-d0c3c5b02f91",
        college: "Vidya Vihar Institute of Technology, Purnia",
    },
    {
        id: "8440f95d-c8b6-4e17-9e0b-1600e3e2e433",
        college:
            "VIDYA VIKAS EDUCATION TRUST UNIVERSAL COLLEGE OF ENGINEERING, THANE, Thane",
    },
    {
        id: "b8d9b37a-a3b0-451f-beca-84936bb6e6ac",
        college: "Vidya Vikas Institute of Engineering & Technology, Mysore",
    },
    {
        id: "235aed85-8976-43d5-bd3c-29ff6ddc2850",
        college: "VIDYAVARDHINI'S COLLEGE OF ENGINEERING AND TECHNOLOGY, Vasai",
    },
    {
        id: "697c3767-1e5b-4aa8-90b9-479de5807b61",
        college: "Vignan Institute of Technology and Science, Hyderabad",
    },
    {
        id: "8ac0209a-a134-485f-8a87-fb207d1252ed",
        college: "Vignan's Institute of Information Technology, Visakhapatnam",
    },
    {
        id: "17012a40-96cc-424e-a19f-a8d617757c86",
        college: "Vignana Bharathi Institute of Technology,  HYDERABAD",
    },
    {
        id: "861a25c9-f1b7-4818-8f56-b3b9748f3f8b",
        college:
            "Vignan's Foundation for Science, Technology & Research, Guntur",
    },
    {
        id: "d2d4fb5b-66ed-4f11-86a0-cf5d4fc4f9cb",
        college: "VIGNAN'S INSTITUTE OF ENGINEERING FOR WOME, Visakhapatnam",
    },
    {
        id: "ab4c39c5-ab51-4cfe-8c4b-c45b71ce42b8",
        college: "Vimal Jyothi Engineering College, Kannur",
    },
    {
        id: "453ff7f4-9bc8-4b33-aa41-e76ef89db55c",
        college:
            "Vinayaka Mission's Kirupananda Variyar Engineering College, Salem",
    },
    {
        id: "c780f13b-da30-4a42-8cd8-7202c7eacb36",
        college: "Vishnu Institute of Technology, Bhimavaram",
    },
    {
        id: "33ac838a-42b6-4412-b900-04d3273e266a",
        college:
            "VISHWAKARMA GOVERNMENT ENGINEERING COLLEGE CHANDKHEDA, Ahmedabad",
    },
    {
        id: "345e8142-9e56-4a35-8803-29cefb72c1a3",
        college: "Vishwakarma Institute of Information Technology, Pune",
    },
    {
        id: "0bce4eb1-210d-4bc7-850c-6b8b1318bfb5",
        college: "Vishwakarma Institute of Technology, Pune",
    },
    {
        id: "b09c966e-589b-4e1c-bb6a-4f4e232c6997",
        college: "Visvesvaraya National Institute of Technology, Nagpur",
    },
    {
        id: "6ca586e6-d4bd-4b80-a3b9-52791f78b149",
        college: "Visvesvaraya Technological University, Belgaum",
    },
    {
        id: "20276b6c-004f-4917-8c9a-59cd33e7e1db",
        college: "Visvodaya Engineering College, Kavali",
    },
    {
        id: "2a9154d1-3aa9-4742-a61e-e9083a94b839",
        college:
            "Viswanadha Institute of Technology and Management, Visakhapatnam",
    },
    {
        id: "583bf4a5-fbc4-4ed4-a5f4-c1cf2a200c40",
        college:
            "Vivekanand Education Society's Institute of Technology Sindhi Society, Mumbai Suburban",
    },
    {
        id: "2e2109a0-2a89-4ccb-9562-eb5f715dfc96",
        college:
            "Vivekananda Institute of Technology, BANGALORE, Bangalore Rural",
    },
    {
        id: "3aa3f4d7-992e-4ab7-9235-b4c4fdf1df3d",
        college: "Vivekanandha College of Engineering for Women, Namakkal",
    },
    {
        id: "d4b9a445-2427-4ea3-95b6-ae88111070f2",
        college: "Vivekanandha College of Technology for Women, Namakkal",
    },
    {
        id: "f38a7254-381a-4037-9f25-489d2c6a9eff",
        college: "Walchand College of Engineering, Sangli",
    },
    {
        id: "1e719c0b-b8ed-4e48-b820-437413db891c",
        college: "Walchand Institute of Technology, Solapur",
    },
    {
        id: "b080c1dc-c96e-4276-adf8-2f8e30a988c8",
        college: "Yeshwantrao Chavan College of Engineering, Nagpur",
    },
    {
        id: "6946d162-4679-47e3-855b-417d9c25fcb6",
        college: "YMCA University of Science and Technology, Faridabad",
    },
];

const filter = createFilterOptions();

const EditProfile = () => {
    const { currentUser, Gsignup } = useAuth();
    const [value, setValue] = useState(null);
    return (
        <>
            <NavBar />
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <h3>Edit Profile</h3>
                </Grid>
                <Card
                    style={{
                        padding: "1.5rem",
                    }}
                >
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Name</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                value={currentUser.displayName}
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                disabled
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Email</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                value={currentUser.email}
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                disabled
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Graduating Year</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            {/* <LocalizationProvider
                                style={{
                                    width: "100%",
                                }}
                                dateAdapter={DateAdapter}
                            > */}
                                {/* <DatePicker
                                    views={["year"]}
                                    value={value}
                                    minDate={moment()}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    // maxDate={2027}s
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                /> */}
                            {/* </LocalizationProvider> */}
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                    components={["DatePicker", "DatePicker"]}
                                >
                                    <DatePicker
                                        label={'"year"'}
                                        openTo="year"
                                    />
                                </DemoContainer>
                            </LocalizationProvider> */}
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "90%",
                                }}
                                type="text"
                                autoComplete="post-title"
                            />
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Degree Pursuing</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Current College</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={Colleges.map(
                                    (option) => option.college
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        
                                        InputProps={{
                                            ...params.InputProps,
                                            type: "search",
                                        }}
                                    />
                                )}
                            />
                            {/* <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                autoComplete={Colleges}
                            /> */}
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Resume</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Linkedin</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Github</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Blogs</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Website</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid
                            items
                            md={3}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <div>
                                <label>Describe Yourself</label>
                            </div>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            style={{
                                margin: "1rem 0",
                            }}
                        >
                            <TextField
                                id="outlined-title-input"
                                // label="Post Title"
                                style={{
                                    width: "100%",
                                }}
                                type="text"
                                multiline
                                autoComplete="post-title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Button
                            variant="contained"
                            style={{
                                color: "white",
                                width: "100%",
                            }}
                        >
                            Update Profile
                        </Button>
                    </Grid>
                </Card>
            </Container>
        </>
    );
};

export default EditProfile;
