import {
    Badge,
    Button,
    Divider,
    HStack,
    Image,
    Spinner,
    Stack,
    Text,
    VStack,
    Wrap,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";


const SingleProductPage = () => {
    const [isButLoading, setIsButLoading] = useState(false);
    const [bagbutton, setbagbutton] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [allCartData, setAllCartData] = useState({});
    const navigate = useNavigate();


    const param = useParams();
    const getDataFromApi = (data) => {
        setLoading(true);
        axios
            .get(`https://63cbf170ea855154151855dc.mockapi.io/fur/${data}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };
    useEffect(() => {
        getDataFromApi(param.id);
    }, []);

    const cart_data_all = JSON.parse(localStorage.getItem("cart")) || [];

    const handleClick = () => {
        setIsButLoading(true);
        setTimeout((e) => {
            alert("Added To Cart");
            cart_data_all.push(data);
            localStorage.setItem("cart", JSON.stringify(cart_data_all));
            setIsButLoading(false);
            setbagbutton(false);
            navigate("/cart");
            window.location.reload();
        }, 1000);
    };

    <loading />

    return (
        <Wrap
            spacing={30}
            justify="center"
            style={{
                marginTop: "10px",
                marginBottom: "50px",
                border: "0px solid blue",

            }}
        >
            <HStack spacing={5}>
                <Image borderRadius={15} src={data.image} w="450px" />
            </HStack>

            <VStack width={550} align="revert-layer" spacing={5}>
                <Text
                    fontSize="30"
                    fontWeight="bold"
                    marginTop={50}
                    color="gray.500"
                ></Text>
                <Text marginTop={30} fontSize="2xl" color="gray.500">
                    {data.title}
                </Text>

                <Badge
                    fontSize="18px"
                    variant="outline"
                    width="fit-content"
                    colorScheme="#ff7035"
                >
                    {"4.4  ⭐"}
                </Badge>

                <Stack>
                    <HStack alignContent="center">
                        <Text fontWeight="bold" fontSize="4xl">
                            ₹ {data.price}/-
                        </Text>
                    </HStack>
                    <Text>inclusive of all taxes</Text>
                </Stack>

                <Divider />

                <Badge fontSize="xl" variant="subtle" colorScheme="#ff7035">
                    ₹ {(data.price) * 90 / 100 - 50}/- for Fury members only
                </Badge>

                <Text>
                    Buy Membership at ₹ 199/- & get 50% Off
                </Text>
                <Divider />
                <Divider />
                <HStack
                    w="full"
                    style={{ border: "0px solid green", margin: "0px 0px 20px 0px" }}
                >
                    <Button
                        onClick={() => handleClick()}
                        fontSize="large"
                        padding={8}
                        w="full"
                        colorScheme="orange"
                    >
                        {!isButLoading && bagbutton && "Add To Cart"}
                        {!isButLoading && !bagbutton && "ADDED"}
                        {isButLoading && (
                            <Spinner
                                thickness="4px"
                                speed="0.55s"
                                emptyColor="gray.200"
                                color="orange.500"
                                size="lg"
                            />
                        )}
                    </Button>
                    <Button
                        fontSize="large"
                        padding={8}
                        w="full"
                        colorScheme="teal"
                        variant="outline"
                    >
                        <AiOutlineHeart fontSize="30px" /> WISHLIST
                    </Button>
                </HStack>
            </VStack>
        </Wrap>
    );
};

export default SingleProductPage;