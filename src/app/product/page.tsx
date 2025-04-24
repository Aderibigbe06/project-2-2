"use client"

import { Box, Heading, Center, Stack, Button, Image, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { FaApple, FaGooglePlay } from 'react-icons/fa';


export default function newPage2() {
    return(
        <>
        {/* <Box width = "80%" maxWidth = "1200px" margin = "0 auto" background = "gray.100" borderRadius="30px" padding="10px" border = "gray.200" marginTop = "50px">
            <Center>
                <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="10px">
                    <Image src = "/images/frame1.png" alt = "Frame1" width = "129px" height = "45px" />
                    <Link href = "/page"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Home</Heading></Link>
                    <Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" color = "red.600">Product</Heading>
                    <Link href = "/contact"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%">Contact</Heading></Link>
                    <Link href = "/partner"><Heading size="sm" fontFamily = "Inter" fontWeight = "600" fontSize = "20px" lineHeight = "20%" letterSpacing = "0%" >Partner with us!</Heading></Link>
                    <Button borderRadius = "20px" width = "12%" fontSize = "15px">Get started</Button>
                </Stack>
            </Center>
        </Box> */}


        <Box width="90%" maxW="1200px" mx="auto" bg="gray.100" borderRadius="30px" p="10px" border="1px solid" borderColor="gray.200" mt="50px">
          <Center>
            <Stack
              direction={["column", "column", "row"]}
              justify="space-between"
              align="center"
              gap={["20px", "20px", "0px"]}
              width="100%"
              flexWrap="wrap">
                <Image src="/images/frame1.png" alt="Frame1" width={["100px", "110px", "129px"]} height="auto"/>
                
                <Link href="/page"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0"> Home </Heading></Link>
                <Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0" color="red.600"> Product </Heading>
                <Link href="/contact"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0"> Contact </Heading></Link>
                <Link href="/partner"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="1"> Partner with us! </Heading></Link>
                <Button borderRadius="20px" width={["100%", "auto", "12%"]} fontSize={["14px", "15px"]}> Get started </Button>
            </Stack>
          </Center>
        </Box>




        {/* <Box background = "orange.100" borderRadius = "25px" width = "93%" justifyContent = "center" margin = "0 auto" marginTop = "50px">
            <Box paddingLeft = "140px" paddingTop = "50px">
                <Text width = "531px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%">
                    Fuel Convenience, <br />
                    Simplified
                </Text>
            </Box>

            <Box paddingLeft = "140px" paddingTop = "20px">
                <Text width = "531px" height = "54px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%">
                    Explore our real-time tools for finding fuel stations near <br />
                    you
                </Text>
            </Box>

            <Box marginLeft = "800px" marginTop = "-200px">
                <Image src = "/images/f16.png" alt = "F16" width = "279px" height = "273px" position = "relative" right = "90px" top = "-20px" />
            </Box>

            <Box paddingLeft = "140px" position = "relative" top = "-60px">
                <Button borderRadius = "20px" width = "12%" fontSize = "15px" >Get started</Button>
            </Box>
        </Box> */}




        <Box 
          background="orange.100" 
          borderRadius={["15px", "20px", "25px"]} 
          width={["90%", "92%", "93%"]} 
          justifyContent="center" 
          margin="0 auto" 
          marginTop={["30px", "40px", "50px"]}
          p={["4", "4", "5"]}>
            <Box paddingLeft={["20px", "80px", "140px"]} paddingTop={["30px", "40px", "50px"]}>
              <Text 
                width={["100%", "100%", "531px"]} 
                fontFamily="Poppins" 
                fontWeight="500" 
                fontSize={["30px", "40px", "50px"]} 
                lineHeight={["35px", "45px", "55px"]} 
                letterSpacing="0%">
                  Fuel Convenience, <br />
                  Simplified
              </Text>
            </Box>
  
            <Box paddingLeft={["20px", "80px", "140px"]} paddingTop={["15px", "15px", "20px"]}>
              <Text 
                width={["100%", "100%", "531px"]} 
                fontFamily="Poppins" 
                fontWeight="400" 
                fontSize={["14px", "16px", "18px"]} 
                lineHeight="100%" 
                letterSpacing="0%">
                  Explore our real-time tools for finding fuel stations near<br />
                  you
              </Text>
            </Box>
  
            <Box display={["none", "block", "block"]} marginLeft={["0", "600px", "800px"]} marginTop={["0", "-150px", "-200px"]}>
              <Image 
                src="/images/f16.png" 
                alt="F16" 
                width={["200px", "240px", "279px"]} 
                height={["194px", "234px", "273px"]} 
                position="relative" 
                right={["30px", "60px", "90px"]} 
                top={["-10px", "-15px", "-20px"]}/>
            </Box>
  
            <Box 
              paddingLeft={["20px", "80px", "140px"]} 
              position="relative" 
              top={["15px", "-30px", "-60px"]}
              paddingBottom={["20px", "20px", "0"]}>
                <Button borderRadius="20px" width={["40%", "20%", "12%"]} fontSize={["14px", "14px", "15px"]}>
                  Get started
                </Button>
            </Box>
        </Box>





        <Box paddingTop={{ base: "30px", md: "50px" }} paddingLeft={{ base: "20px", md: "150px" }}>
          <Image src="/images/f17.png" alt="F17" width={{ base: "80%", md: "60%" }} height={{ base: "auto", md: "60%" }}/>
        </Box>



        {/* <Box background = "#EFF4FF" borderRadius="25px" width="83%" margin = "0 auto" marginTop = "55px" padding = "50px 100px">
            <Box display = "flex" justifyContent= "space-between" alignItems = "center">
                <Box maxWidth = "50%">
                    <Text width = "531px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%">
                        Locate Fuel Instantly <br />
                        Anytime.
                    </Text>

                    <Text width = "531px" height = "81px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%">
                        Find nearby fuel station in real-time with our intuitive <br />
                        platform. Whether it is unleaded, diesel, or an EV charging <br />
                        station, you will never have to worry about running on empty.
                    </Text>
                </Box>

                <Box maxWidth = "45%">
                    <Image src="/images/f18.png" alt="F18" width="90%" height="60%" />
                </Box>
            </Box>
        </Box> */}


        <Box background="#EFF4FF" borderRadius="25px" width="83%" margin="0 auto" marginTop="55px" padding={{ base: "30px 20px", md: "50px 100px" }}>
          <Box display={{ base: "block", md: "flex" }} justifyContent="space-between" alignItems="center">
            <Box maxWidth={{ base: "100%", md: "50%" }} mb={{ base: "30px", md: "0" }}>
              <Text fontFamily="Poppins" fontWeight="500" fontSize={{ base: "28px", md: "50px" }} lineHeight={{ base: "36px", md: "55px" }}>
                Locate Fuel Instantly<br />
                Anytime.
              </Text>

              <Text fontFamily="Poppins" fontWeight="400" fontSize={{ base: "16px", md: "18px" }} lineHeight={{ base: "26px", md: "28px" }} marginTop="20px">
                Find nearby fuel stations in real-time with our intuitive platform.
                Whether it's unleaded, diesel, or an EV charging station, you’ll never
                have to worry about running on empty.
              </Text>
            </Box>

            <Box maxWidth={{ base: "100%", md: "45%" }}>
              <Image
                src="/images/f18.png"
                alt="F18"
                width={{ base: "100%", md: "90%" }}
                height={{ base: "auto", md: "60%" }}
                mx={{ base: "auto", md: "0" }}/>
            </Box>
          </Box>
        </Box>





        {/* <Box background = "orange.100" borderRadius = "25px" width = "93%" justifyContent = "center" margin = "0 auto" marginTop = "50px">
          <Box paddingLeft = "120px" paddingTop = "50px">
            <Text width = "430px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%" >
              Fuel <br /> 
              Convenience
            </Text>
          </Box>
        
          <Box paddingLeft = "120px" paddingTop = "20px">
            <Text width = "626px" height = "54px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%" >
              Locate fuel station nearby with real fuel updates when you need <br /> them 
            </Text>
          </Box>
        
          <Box paddingLeft = "950px">
            <Button background = "orange.200" borderRadius = "50px" width = "70px" height = "70px" display = "flex" alignItems = "center" justifyContent = "center" padding = "0" position = "relative" top = "-190px">
              <Image src = "/images/f5.png" alt = "F5" width = "40px" height = "40px" borderRadius = "50px"/>
            </Button>
          </Box>
        
          <Flex direction="column" align="center" w="100%">
            <Box background="white" width="85%" height="auto" borderRadius="25px" padding="40px" position="relative" overflow="hidden" mb="30px">
              <Box width="100%" display="flex" justifyContent="flex-start" marginBottom="30px" marginTop="-10px">
                <Image src="/images/i10.png" alt="i10" width="40px" height="auto" />
              </Box>
        
              <Flex zIndex={2}>
                <Box flex={1} marginLeft="10px">
                  <Text color="black" fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%">
                    Locate Fuel in Seconds
                  </Text>
        
                  <Text color="black" fontFamily="Poppins" fontWeight="400" fontSize="18px" lineHeight="140%" letterSpacing="0%" marginTop="10px">
                    Our user-friendly platform helps you locate the <br />
                    nearest fuel station based on your location <br />
                    or your preferred area.
                  </Text>
                </Box>
        
                <Box position="absolute" top = "-40px" right="10px" width="50%" height="auto">
                  <Image src="/images/f16.png" alt="f16" width="100%" height="auto" />
                </Box>
        
                <Box width="50%" height="50%">
                  <Image src="/images/i14.png" alt="i14" width="100%" height="auto" borderRadius="20px" />
                </Box>
              </Flex>
            </Box>
              
        
            <Flex width="85%" gap="30px" mb = "40px">
              <Box background="#FAA24B" width="50%" borderRadius="25px" display="flex" flexDirection="column" alignItems="center" padding="2rem" backgroundImage="url('/images/i15.png')" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center">
                <Image src="/images/i16.png" alt="i16" width="60%" height="auto" marginBottom="1rem"/>
                  
                <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%" textAlign="center" color="white" marginBottom="1rem">
                  Fueling Your Day, Anywhere <br />
                  Anytime
                </Text>
                  
                <Text fontFamily="Poppins" fontSize="16px" lineHeight="100%" color="white">
                  Whether you are on a cross-country road trip or <br />
                  commuting to work, FuelFinder ensures that you are never far <br />
                  from a solution.
                </Text>
              </Box>
                
      
              <Box background="black" width="50%" borderRadius="25px" padding="2rem" position="relative" minHeight="300px">
                <Box position="absolute" top="30px" right="-10px" zIndex="1">
                  <Image src="/images/f9.png" alt="F9" width="70%" height="auto" borderRadius="20px"/>
                </Box>
              
                <Box position="absolute" top="55px" right="70px">
                  <Image src="/images/circle.png" alt="circle" width="75%" height="auto" />
                </Box>
              
                <Flex direction="column" justifyContent="flex-end" alignItems="center" height="100%" pb="4" >
                  <Text color="white" fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%" marginBottom="15px" textAlign="center">
                    Real-Time Updates
                  </Text>
                
                  <Text color="white" fontFamily="Poppins" fontSize="16px" lineHeight="100%">
                    See the most up-to-dates locations and availability of <br />
                    nearby stations.
                  </Text>
                </Flex>
              </Box> 
            </Flex>
          </Flex>
        </Box> */}



        <Box background="orange.100" borderRadius={["15px", "20px", "25px"]} width={["100%", "98%", "95%", "93%"]} justifyContent="center" margin="0 auto" marginTop={["20px", "30px", "50px"]} p={["4", "4", "5"]}>
          <Box paddingLeft={["20px", "60px", "120px"]} paddingTop={["20px", "30px", "50px"]}>
            <Text 
              width={["100%", "100%", "430px"]} 
              fontFamily="Poppins" 
              fontWeight="500" 
              fontSize={["30px", "40px", "50px"]} 
              lineHeight={["35px", "45px", "55px"]} 
              letterSpacing="0%">
                Fuel <br /> 
                Convenience
            </Text>
          </Box>

          <Box paddingLeft={["20px", "60px", "120px"]} paddingTop={["10px", "15px", "20px"]}>
            <Text 
              width={["100%", "100%", "626px"]} 
              fontFamily="Poppins" 
              fontWeight="400" 
              fontSize={["14px", "16px", "18px"]} 
              lineHeight="100%" 
              letterSpacing="0%">
                Locate fuel station nearby with real fuel updates when you need <br /> them 
            </Text>
          </Box>

          <Box display={["none", "block", "block"]} paddingLeft={["70%", "85%", "950px"]}>
            <Button 
              background="orange.200" 
              borderRadius="50px" 
              width={["50px", "60px", "70px"]} 
              height={["50px", "60px", "70px"]} 
              display="flex" 
              alignItems="center" 
              justifyContent="center" 
              padding="0" 
              position="relative" 
              top={["-120px", "-150px", "-190px"]}> 
                <Image src="/images/f5.png" alt="F5" width={["30px", "35px", "40px"]} height={["30px", "35px", "40px"]} borderRadius="50px"/>
            </Button>
          </Box>

          <Flex direction="column" align="center" w="100%">
            <Box 
            background="white" 
            width={["95%", "90%", "85%"]} 
            height="auto" 
            borderRadius={["15px", "20px", "25px"]} 
            padding={["20px", "30px", "40px"]} 
            position="relative" 
            overflow="hidden" 
            mb={["15px", "20px", "30px"]}
            mt = "10px">
              <Box width="100%" display="flex" justifyContent="flex-start" marginBottom={["15px", "20px", "30px"]} marginTop="-10px">
                <Image src="/images/i10.png" alt="i10" width={["30px", "35px", "40px"]} height="auto" />
              </Box>

              <Flex zIndex={2} direction={["column", "column", "row"]}>
                <Box flex={1} marginLeft={["5px", "7px", "10px"]} mb={["20px", "20px", "0"]}>
                  <Text color="black" fontFamily="Poppins" fontWeight="500" fontSize={["20px", "25px", "30px"]} lineHeight="100%" letterSpacing="0%">
                    Locate Fuel in Seconds
                  </Text>

                  <Text color="black" fontFamily="Poppins" fontWeight="400" fontSize={["14px", "16px", "18px"]} lineHeight="140%" letterSpacing="0%" marginTop="10px">
                    Our user-friendly platform helps you locate the 
                    nearest fuel station based on your location 
                    or your preferred area.
                  </Text>
                </Box>

                <Box 
                  position={["static", "static", "absolute"]} 
                  top={["0", "-20px", "-40px"]} 
                  right="10px" 
                  width={["100%", "70%", "50%"]} 
                  height="auto" 
                  display={["none", "none", "block"]}>
                    <Image src="/images/f16.png" alt="f16" width="100%" height="auto" />
                </Box>

                <Box width={["100%", "80%", "50%"]} height="50%" mt={["10px", "0", "0"]}>
                  <Image src="/images/i14.png" alt="i14" width="100%" height="auto" borderRadius="20px" />
                </Box>
              </Flex>
            </Box>
  
            <Flex 
            width={["95%", "90%", "85%"]} 
            gap={["15px", "20px", "30px"]} 
            mb={["20px", "30px", "40px"]} 
            direction={["column", "column", "row"]}>
              <Box 
                background="#FAA24B" 
                width={["100%", "100%", "50%"]} 
                borderRadius={["15px", "20px", "25px"]} 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                padding={["1rem", "1.5rem", "2rem"]} 
                backgroundImage="url('/images/i15.png')" 
                backgroundSize="cover" 
                backgroundRepeat="no-repeat" 
                backgroundPosition="center">
                  <Image src="/images/i16.png" alt="i16" width={["80%", "70%", "60%"]} height="auto" marginBottom="1rem"/>
    
                  <Text fontFamily="Poppins" fontWeight="500" fontSize={["20px", "25px", "30px"]} lineHeight="100%" letterSpacing="0%" textAlign="center" color="white" marginBottom="1rem">
                    Fueling Your Day, Anywhere <br />
                    Anytime
                  </Text>
    
                  <Text fontFamily="Poppins" fontSize={["12px", "14px", "16px"]} lineHeight="100%" color="white">
                    Whether you are on a cross-country road trip or <br />
                    commuting to work, FuelFinder ensures that you are never far <br />
                    from a solution.
                  </Text>
              </Box>

              <Box 
                background="black" 
                width={["100%", "100%", "50%"]} 
                borderRadius={["15px", "20px", "25px"]} 
                padding={["1rem", "1.5rem", "2rem"]} 
                position="relative" 
                minHeight={["200px", "250px", "300px"]}>
                  <Box 
                    position="absolute" 
                    top={["10px", "20px", "30px"]} 
                    right={["-5px", "-7px", "-10px"]} 
                    zIndex="1" 
                    display={["none", "block", "block"]}>
                      <Image src="/images/f9.png" alt="F9" width={["50%", "60%", "70%"]} height="auto" borderRadius="20px"/>
                  </Box>

                  <Box 
                    position="absolute" 
                    top={["30px", "45px", "55px"]} 
                    right={["40px", "55px", "70px"]}
                    display={["none", "block", "block"]}>
                      <Image src="/images/circle.png" alt="circle" width={["55%", "65%", "75%"]} height="auto" />
                  </Box>

                  <Flex direction="column" justifyContent="flex-end" alignItems="center" height="100%" pb="4">
                    <Text color="white" fontFamily="Poppins" fontWeight="500" fontSize={["20px", "25px", "30px"]} lineHeight="100%" letterSpacing="0%" marginBottom="15px" textAlign="center">
                      Real-Time Updates
                    </Text>
  
                    <Text color="white" fontFamily="Poppins" fontSize={["12px", "14px", "16px"]} lineHeight="100%">
                      See the most up-to-dates locations and availability of <br />
                      nearby stations.
                    </Text>
                  </Flex>
              </Box> 
            </Flex>
          </Flex>
        </Box>




        <Box 
          background="#003399" 
          marginLeft={{ base: "10px", sm: "20px", md: "50px" }} 
          width={{ base: "95%", md: "93%" }} 
          height="100%" 
          borderRadius="25px" 
          padding={{ base: "20px", sm: "30px", md: "40px" }} 
          position="relative" 
          overflow="hidden" 
          marginBottom="50px"
          marginTop="50px">
 
        <Box 
          width="100%" 
          display="flex" 
          justifyContent="flex-start" 
          marginBottom={{ base: "15px", md: "30px" }} 
          marginTop={{ base: "0", md: "-10px" }}>
            <Image src="/images/i10.png" alt="i10" width={{ base: "30px", md: "40px" }} height="auto"/>
        </Box>
  
        <Text 
          fontFamily="Poppins" 
          fontWeight="500" 
          fontSize={{ base: "28px", sm: "35px", md: "42px", lg: "50px" }} 
          lineHeight={{ base: "120%", md: "59px" }} 
          letterSpacing="0%" 
          color="white"
          position="relative"
          zIndex="2">
            <Text as="span" color="yellow.500">
              Trusted by </Text>Movers, 
              <Box as="br" display={{ base: "none", md: "inline" }} />
              Shakers,
              <Text as="span" color="yellow.500"> and </Text> 
              <Box as="br" display={{ base: "none", md: "inline" }} />
              Planet Savers!
        </Text>
  
          <Box 
            position="absolute" 
            top={{ base: "30%", md: "-40px" }} 
            right={{ base: "-30%", sm: "-15%", md: "10px" }} 
            width={{ base: "120%", sm: "100%", md: "100%" }} 
            height="auto">
              <Image src="/images/i17.png" alt="i17" width="100%" height="auto" />
          </Box>
  

          <Box 
            position="absolute" 
            top={{ base: "30%", md: "-40px" }} 
            right={{ base: "-30%", sm: "-15%", md: "10px" }} 
            width={{ base: "120%", sm: "100%", md: "100%" }} 
            height="auto">
              <Image src="/images/i18.png" alt="i18" width="100%" height="auto" zIndex={1} opacity={0.15}/>
          </Box>
        </Box>



            {/* <Box width = "100%" background="linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)" textAlign = "center" marginBottom = "50px"  px="20px" py="30px">
                <Text fontFamily="Ubuntu" fontWeight="500" fontSize="55px" lineHeight="100%" letterSpacing="0%" marginBottom = "20px">
                  Ready to Join the Energy <br/>
                  Revolution?
                </Text>
        
                <Text fontFamily="Poppins" fontWeight="400" fontSize="24px" lineHeight="100%" letterSpacing="0%" marginBottom = "30px">
                  Take the first step to a sustainable and efficient future. <br />
                  Explore our renewable energy solutions today.
                </Text>
        
                <Flex  gap="20px" mb = "40px">
                    <Button borderRadius="40px" width = "20%" height = "auto" size = "lg" padding = "12px" marginLeft = "400px">
                        <Icon as={FaApple} boxSize="10" color="white"/>
                        <Text>Download on the <br />
                            App Store</Text>
                    </Button>
        
                    <Button  borderRadius="40px" width = "20%" height = "auto" size = "lg" padding = "12px">
                        <Icon as={FaGooglePlay} boxSize="10" color="white"/>
                        <Text>
                            Google Play<br />
                        </Text>
                    </Button>
                </Flex>
            </Box> */}



        <Box 
          width="100%" 
          background="linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)" 
          textAlign="center" 
          marginBottom="50px"
          px={{ base: "20px", md: "40px" }} 
          py={{ base: "30px", md: "40px" }}>
            <Text 
              fontFamily="Ubuntu" 
              fontWeight="500" 
              fontSize={{ base: "28px", sm: "36px", md: "45px", lg: "55px" }} 
              lineHeight="110%" 
              letterSpacing="0%" 
              marginBottom={{ base: "15px", md: "20px" }}>
                Ready to Join the Energy
              <Box as="br" display={{ base: "none", md: "block" }} />
              {" Revolution?"}
            </Text>
  
            <Text 
              fontFamily="Poppins" 
              fontWeight="400" 
              fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "24px" }} 
              lineHeight={{ base: "130%", md: "110%" }} 
              letterSpacing="0%" 
              marginBottom={{ base: "25px", md: "30px" }}
              px={{ base: "0", md: "20px" }}>
                Take the first step to a sustainable and efficient future.
              <Box as="br" display={{ base: "none", md: "block" }} />
              {" Explore our renewable energy solutions today."}
            </Text>
  
            <Flex 
              flexDirection={{ base: "column", sm: "row" }} 
              justifyContent={{ base: "center", sm: "center" }} 
              alignItems="center" 
              gap={{ base: "15px", md: "20px" }} 
              mb="40px"
              width="100%">
                <Button 
                  borderRadius="40px" 
                  width={{ base: "80%", sm: "40%", md: "30%", lg: "20%" }} 
                  height="auto" 
                  size="lg" 
                  padding={{ base: "10px", md: "12px" }}
                  marginLeft={{ base: "0", sm: "0", md: "0", lg: "0" }}>
                    <Icon as={FaApple} boxSize={{ base: "6", md: "8", lg: "10" }} color="white" marginRight="2" />
                    <Text fontSize={{ base: "sm", md: "md" }}>
                      Download on the <br />
                      App Store
                    </Text>
                </Button>
    
                <Button 
                  borderRadius="40px" 
                  width={{ base: "80%", sm: "40%", md: "30%", lg: "20%" }} 
                  height="auto" 
                  size="lg" 
                  padding={{ base: "10px", md: "12px" }}>
                    <Icon as={FaGooglePlay} boxSize={{ base: "6", md: "8", lg: "10" }} color="white" marginRight="2" />
                    <Text fontSize={{ base: "sm", md: "md" }}>
                      Google Play
                    </Text>
                </Button>
            </Flex>
        </Box>




            {/* <Box background = " #F4F7FE" >
                <Center>
                    <Box marginTop = "50px" marginLeft = "-1000px">
                        <Image src = "/images/frame1.png" alt = "Frame1" width = "90%" height = "60%" />
                    </Box>
                </Center>
    

                <Box marginLeft = "70px" marginTop = "40px">
                    <Image src = "/images/button.png" alt = "button" width = "10%" height = "50%" borderRadius = "30px"  />
                </Box>


                <Center py = "4" style={{ marginTop: "-130px" }}>
                    <Stack direction = "row" gap = "40" align = "flex-start">
                        <Stack gap = "2" align = "flex-start">
                            <Text fontWeight = "600" fontSize = "20px">Company</Text>
                            <Text>Home</Text>
                            <Text>About us</Text>
                            <Text>Partner with us</Text>
                        </Stack>

    
                        <Stack gap = "2" align = "flex-start">
                            <Text fontWeight = "600" fontSize = "20px">Products</Text>
                            <Text>Eco Friendly</Text>
                            <Text>Petroleum products</Text>
                            <Text>EV Charging (coming soon)</Text>
                            <Text>Service Technician (coming soon)</Text>
                        </Stack>

    
                        <Stack gap = "2" align = "flex-start">
                            <Text fontWeight = "600" fontSize = "20px">Support</Text>
                            <Text>Privacy Policy</Text>
                            <Text>Terms</Text>
                            <Text>Contact</Text>
                        </Stack>

                    </Stack>
                </Center>


                <Box display = "flex" justifyContent = "center" >
                    <Image src = "/images/frame 4.png" alt = "Frame 4" width = "8%" height = "8%" />
                </Box>


                <Image src = "/images/fuel.png" alt = "Fuel" width = "100%" height = "90%" />
            </Box> */}



        <Box background = "#F4F7FE">
          <Flex 
            direction={{ base: "column", md: "row" }}
            width="100%"
            paddingX={{ base: "20px", md: "50px" }}
            paddingY={{ base: "30px", md: "50px" }}
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ md: "space-between" }}
            flexWrap={{ md: "nowrap" }}
            gap={{ md: "20px" }}>
               
              <Box width={{ base: "50%", md: "15%" }} marginBottom={{ base: "30px", md: "0" }} display="flex" flexDirection="column" alignItems={{ base: "center", md: "flex-start" }}>
                <Image src="/images/frame1.png" alt="Frame1" width="100%" height="auto" marginBottom={{ base: "20px", md: "20px" }} />
                
                <Image src="/images/button.png" alt="button" width={{ base: "60%", md: "70%" }} height="auto" borderRadius="30px"/>
              </Box>
            
                
              <Stack 
                gap="2" 
                align={{ base: "center", md: "flex-start" }} 
                width={{ base: "100%", md: "18%" }}
                marginBottom={{ base: "30px", md: "0" }}>
                  <Text fontWeight="600" fontSize={{ base: "18px", md: "20px" }}>Company</Text>
                  <Text>Home</Text>
                  <Text>About us</Text>
                  <Text>Partner with us</Text>
              </Stack>
            
               
              <Stack 
                gap="2" 
                align={{ base: "center", md: "flex-start" }} 
                width={{ base: "100%", md: "28%" }}
                marginBottom={{ base: "30px", md: "0" }}>
                  <Text fontWeight="600" fontSize={{ base: "18px", md: "20px" }}>Products</Text>
                  <Text>Eco Friendly</Text>
                  <Text>Petroleum products</Text>
                  <Text>EV Charging (coming soon)</Text>
                  <Text>Service Technician (coming soon)</Text>
              </Stack>
               
              <Stack 
                gap="2" 
                align={{ base: "center", md: "flex-start" }} 
                width={{ base: "100%", md: "18%" }}>
                  <Text fontWeight="600" fontSize={{ base: "18px", md: "20px" }}>Support</Text>
                  <Text>Privacy Policy</Text>
                  <Text>Terms</Text>
                  <Text>Contact</Text>
              </Stack>
          </Flex>
            
            
          <Box display="flex" justifyContent="center" paddingY={{ base: "20px", md: "30px" }}>
            <Image src="/images/frame 4.png" alt="Frame 4" width={{ base: "25%", sm: "20%", md: "12%", lg: "8%" }} height="auto"/>
          </Box>
            
          <Image src="/images/fuel.png" alt="Fuel" width="100%" height="auto" objectFit="cover" />
        </Box>
      </>
    )
}