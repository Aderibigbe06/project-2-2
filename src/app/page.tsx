"use client"

import {Image, Center, Text, Box, Stack, Heading, Button, Link, List, Flex, Icon} from "@chakra-ui/react"
import { useRouter } from "next/navigation";
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Page() {

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/newPage");
  };

  return (
    <>
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
                
             <Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0" color="red.600"> Home </Heading>
             <Link href="/product"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0"> Product </Heading></Link>
              <Link href="/contact"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="0"> Contact </Heading></Link>
              <Link href="/partner"><Heading fontFamily="Inter" fontWeight="600" fontSize={["18px", "18px", "20px"]} lineHeight="1"> Partner with us! </Heading></Link>
              <Button borderRadius="20px" width={["100%", "auto", "12%"]} fontSize={["14px", "15px"]}> Get started </Button>
          </Stack>
        </Center>
      </Box>




      <Box display = "flex" justifyContent = "center" position = "relative" marginTop = "30px">
        <Image src = "/images/frame 4.png" alt = "Frame 4" width = "6%" height = "8%" />
      </Box>



      {/* <Center marginTop = "-50px"> 
        <Image src = "/images/frame3.png" alt = "Frame3" width = "365px" height = "226px" position = "relative" left = "70px" top = "50px"/>
      
        <Box>
          <Text width = "732px" height = "126px" font = "Ubuntu" fontWeight = "500" fontSize = "55px" lineHeight = "100%" letterSpacing = "0%" color = "#3B3B3B" textAlign = "center">
            Powering Convenience, <br />
            Fueling Sustainability.
            <Text as = "span"></Text>
          </Text>

          <Text width = "762px" height = "72px" font = "Poppins" fontWeight = "400" fontSize = "26px" lineHeight = "100%" letterSpacing = "0%" color = "#3B3B3B" textAlign = "center">
            Explore the best energy solution for your home or business <br />
            while finding fuel when you need it most.
          </Text>
        </Box>
      
        <Image src = "/images/frame 5.png" alt = "Frame 5" width = "279px" height = "273px" position = "relative" right = "90px" top = "-20px" />
      </Center> */}



      <Center marginTop={["20px", "-30px", "-50px"]} flexDirection={["column", "column", "row"]} px={[4, 4, 0]}>
        <Image 
          src="/images/frame3.png" 
          alt="Frame3" 
          width={["200px", "280px", "365px"]} 
          height={["auto", "auto", "226px"]} 
          position={["static", "static", "relative"]} 
          left={[0, 0, "70px"]} 
          top={[0, 0, "50px"]}
          mb={[6, 6, 0]}
          display={["block", "block", "inline"]}
          order={[0, 0, 0]}/>
  
        <Box order={[1, 1, 1]} mb={[8, 8, 0]}>
          <Text 
            width={["100%", "100%", "732px"]} 
            height={["auto", "auto", "126px"]} 
            font="Ubuntu" 
            fontWeight="500" 
            fontSize={["32px", "42px", "55px"]} 
            lineHeight="100%" 
            letterSpacing="0%" 
            color="#3B3B3B" 
            textAlign="center">
              Powering Convenience, <br />
              Fueling Sustainability.
          </Text>
    
          <Text 
            width={["100%", "100%", "762px"]} 
            height={["auto", "auto", "72px"]} 
            font="Poppins" 
            fontWeight="400" 
            fontSize={["18px", "22px", "26px"]} 
            lineHeight="100%" 
            letterSpacing="0%" 
            color="#3B3B3B" 
            textAlign="center"
            mt={[3, 4, 4]}>
              Explore the best energy solution for your home or business <br className="hide-on-mobile" />
              while finding fuel when you need it most.
          </Text>
        </Box>
  
        <Image 
          src="/images/frame 5.png" 
          alt="Frame 5" 
          width={["180px", "220px", "279px"]} 
          height={["auto", "auto", "273px"]} 
          position={["static", "static", "relative"]} 
          right={[0, 0, "90px"]} 
          top={[0, 0, "-20px"]}
          order={[2, 2, 2]} 
          mt={[0, 0, 0]}/>
      </Center>



    
      <Box display = "flex" justifyContent = "center">
        <Button borderRadius = "22px" width = "150px" height = "45px" fontSize = "18px" mb = "20">Get started</Button>
      </Box>




      {/* <Box background = "green.100" borderRadius = "25px" width = "93%" justifyContent = "center" margin = "0 auto">
        <Box paddingLeft = "120px" paddingTop = "50px">
          <Text width = "485px" height = "110px" fontFamily = "Poppins" fontWeight = "500" fontSize = "50px" lineHeight = "55px" letterSpacing = "0%" >
            Eco-Friendly <br />
            Energy Product
          </Text>
        </Box>

        <Box paddingLeft = "120px" paddingTop = "20px">
          <Text width = "675px" height = "54px" fontFamily = "Poppins" fontWeight = "400" fontSize = "18px" lineHeight = "100%" letterSpacing = "0%" >Access high-quality solar panels and energy solution that reduce your <br />
            carbon footprint
          </Text>
        </Box>

        <Box paddingLeft = "950px">
          <Button background = "green.200" borderRadius = "50px" width = "70px" height = "70px" display = "flex" alignItems = "center" justifyContent = "center" padding = "0"  onClick = {handleNavigate} position = "relative" top = "-190px" >
            <Image src = "/images/f4.png" alt = "F4" width = "40px" height = "40px" borderRadius = "50px"/>
          </Button>
        </Box>  


        <Center>
          <Flex direction = "column" align = "center" w = "100%">
            <Box background = "black" width = "85%" height = "auto" borderRadius = "25px" padding = "40px" position = "relative" overflow = "hidden" mb = "30px">
              <Box width = "100%" display = "flex" justifyContent="flex-start" marginBottom="30px" marginTop="-10px">
                <Image src="/images/i10.png" alt="i10" width="40px" height="auto" />
              </Box>

              <Flex zIndex={2}>
              <Box flex={1} marginLeft="10px">
                <Text color="white" fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%">
                  Why Go Green?
                </Text>

                <Text color="white" fontFamily="Poppins" fontWeight="400" fontSize="18px" lineHeight="140%" letterSpacing="0%" marginTop="10px">
                  Switching to renewable energy not only helps the <br />
                  environment but also benefits you:
                </Text>

                <List.Root color="white" marginTop="20px" gap={2}>
                  <List.Item fontFamily="Poppins" fontSize="16px" lineHeight="150%">
                    Lower energy bills with sustainable energy option.
                  </List.Item>
                  <List.Item fontFamily="Poppins" fontSize="16px" lineHeight="150%">
                    Gain independence with home battery storage and <br />
                    uninterrupted power.
                  </List.Item>
                  <List.Item fontFamily="Poppins" fontSize="16px" lineHeight="150%">
                    Contribute to reducing global carbon emissions.
                  </List.Item>
                </List.Root>
              </Box>

              <Box position="absolute" top={70} right={80} width="250px" height="auto">
                <Image src="/images/i8.png" alt="i8" width="100%" height="auto" />
              </Box>

              <Box width="50%" height="50%">
                <Image src="/images/i9.png" alt="i9" width="100%" height="auto" borderRadius="20px" />
              </Box>
              </Flex>
            </Box>
        
      
            <Flex width="85%" gap="30px"  mb = "40px">
              <Box background="#0B6B00" width="50%" borderRadius="25px" display="flex" flexDirection="column" alignItems="center" padding="2rem" backgroundImage="url('/images/i11.png')" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center">
                <Image src="/images/i12.png" alt="i12" width="60%" height="auto" marginBottom="1rem"/>
          
              <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%" textAlign="center" color="white" marginBottom="1rem">
                Solutions Tailored to You
              </Text>
          
              <Text fontFamily="Poppins" fontSize="16px" lineHeight="100%" color="white">
                Our range of renewable energy products is designed to <br />
                meet the unique needs of homes and businesses, <br />
                ensuring efficiency and sustainability every step of the <br />
                way.
              </Text>
              </Box>
        
       
              <Box background="#D0EFCC" width="50%" borderRadius="25px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="2rem">
                <Image src="/images/i13.png" alt="i13" width="60%" height="auto" marginBottom="1.5rem"/>
          
              <Text fontFamily="Poppins" fontWeight="500" fontSize="30px" lineHeight="100%" letterSpacing="0%" marginBottom="10px">
                Making a Difference Together
              </Text>
          
              <Text fontFamily="Poppins" fontSize="16px" lineHeight="100%">
                Do you know? By switching to solar energy, you can <br />
                reduce greenhouse gas emissions by up to 80% <br />
                compared to traditional energy sources. FuelFinder is <br />
                proud to partner with individuals and businesses <br />
                committed to sustainability.
              </Text>
              </Box>
            </Flex>
          </Flex>
        </Center>
      </Box> */}



      <Box background="green.100" borderRadius={["15px", "20px", "25px"]} width={["95%", "95%", "93%"]} justifyContent="center" margin="0 auto" p={[4, 4, 0]}>
        <Box paddingLeft={["20px", "60px", "120px"]} paddingTop={["20px", "30px", "50px"]}>
          <Text 
            width={["100%", "100%", "485px"]} 
            height="auto" 
            fontFamily="Poppins" 
            fontWeight="500" 
            fontSize={["30px", "40px", "50px"]} 
            lineHeight={["40px", "45px", "55px"]} 
            letterSpacing="0%">
              Eco-Friendly
              <Box as="span" display={["none", "none", "inline"]}><br /></Box>
              <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
              Energy Product
          </Text>
        </Box>

        <Box paddingLeft={["20px", "60px", "120px"]} paddingTop={["10px", "15px", "20px"]}>
          <Text 
            width={["100%", "100%", "675px"]} 
            height="auto" 
            fontFamily="Poppins" 
            fontWeight="400" 
            fontSize={["14px", "16px", "18px"]} 
            lineHeight={["150%", "140%", "100%"]} 
            letterSpacing="0%">
              Access high-quality solar panels and energy solution that reduce your 
              <Box as="span" display={["none", "none", "inline"]}><br /></Box>
              <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
              carbon footprint
          </Text>
        </Box>

        <Box paddingLeft={["0", "0", "950px"]} display="flex" justifyContent={["center", "center", "flex-start"]} mt={[4, 4, 0]}>
          <Button 
            background="green.200" 
            borderRadius="50px" 
            width={["60px", "65px", "70px"]} 
            height={["60px", "65px", "70px"]} 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            padding="0" 
            onClick={handleNavigate} 
            position={["static", "static", "relative"]} 
            top={[0, 0, "-190px"]}>
              <Image src="/images/f4.png" alt="F4" width={["30px", "35px", "40px"]} height={["30px", "35px", "40px"]} borderRadius="50px"/>
          </Button>
        </Box>  

        <Center>
          <Flex direction="column" align="center" w="100%">
            <Box 
              background="black" 
              width={["90%", "90%", "85%"]} 
              height="auto" 
              borderRadius={["15px", "20px", "25px"]} 
              padding={["20px", "30px", "40px"]} 
              position="relative" 
              overflow="hidden" 
              mb={["20px", "25px", "30px"]} 
              mt={["20px", "20px", 0]}>
            <Box width="100%" display="flex" justifyContent="flex-start" marginBottom="30px" marginTop="-10px">
              <Image src="/images/i10.png" alt="i10" width="40px" height="auto" />
            </Box>

            <Flex zIndex={2} direction={["column", "column", "row"]}>
              <Box flex={1} marginLeft={["0", "0", "10px"]}>
                <Text color="white" fontFamily="Poppins" fontWeight="500" fontSize={["24px", "28px", "30px"]} lineHeight="100%" letterSpacing="0%">
                  Why Go Green?
                </Text>

                <Text color="white" fontFamily="Poppins" fontWeight="400" fontSize={["14px", "16px", "18px"]} lineHeight={["160%", "150%", "140%"]} letterSpacing="0%" marginTop="10px">
                  Switching to renewable energy not only helps the
                  <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                  <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                  environment but also benefits you:
                </Text>

                <List.Root color="white" marginTop="20px" gap={2}>
                  <List.Item fontFamily="Poppins" fontSize={["14px", "15px", "16px"]} lineHeight="150%">
                    Lower energy bills with sustainable energy option.
                  </List.Item>
                  <List.Item fontFamily="Poppins" fontSize={["14px", "15px", "16px"]} lineHeight="150%">
                    Gain independence with home battery storage and
                    <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                    <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                    uninterrupted power.
                  </List.Item>
                  <List.Item fontFamily="Poppins" fontSize={["14px", "15px", "16px"]} lineHeight="150%">
                    Contribute to reducing global carbon emissions.
                  </List.Item>
                </List.Root>
              </Box>

              <Box 
                position={["static", "static", "absolute"]} 
                top={[null, null, 70]} 
                right={[null, null, 80]} 
                width={["200px", "220px", "250px"]} 
                height="auto" 
                margin={["20px auto", "20px auto", 0]}
                display={["block", "block", "block"]}>
                  <Image src="/images/i8.png" alt="i8" width="100%" height="auto" />
              </Box>

              <Box width={["100%", "100%", "50%"]} height="auto" mt={[4, 4, 0]} display={["none", "none", "block"]}>
                <Image src="/images/i9.png" alt="i9" width="100%" height="auto" borderRadius="20px" />
              </Box>
            </Flex>
            </Box>
  
            <Flex width={["90%", "90%", "85%"]} gap={["20px", "25px", "30px"]} mb="40px" direction={["column", "column", "row"]}>
              <Box 
                background="#0B6B00" 
                width={["100%", "100%", "50%"]} 
                borderRadius={["15px", "20px", "25px"]} 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                padding={["1.5rem", "1.75rem", "2rem"]} 
                backgroundImage="url('/images/i11.png')" 
                backgroundSize="cover" 
                backgroundRepeat="no-repeat" 
                backgroundPosition="center"
                mb={[4, 4, 0]}>
                  <Image src="/images/i12.png" alt="i12" width={["70%", "65%", "60%"]} height="auto" marginBottom="1rem"/>
                  <Text fontFamily="Poppins" fontWeight="500" fontSize={["24px", "28px", "30px"]} lineHeight="100%" letterSpacing="0%" textAlign="center" color="white" marginBottom="1rem">
                    Solutions Tailored to You
                  </Text>
      
                  <Text 
                    fontFamily="Poppins" 
                    fontSize={["14px", "15px", "16px"]} 
                    lineHeight={["160%", "140%", "100%"]} 
                    color="white"
                    textAlign={["center", "center", "left"]}
                    px={[2, 2, 0]}>
                      Our range of renewable energy products is designed to
                      <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                      <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                      meet the unique needs of homes and businesses,
                      <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                      <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                      ensuring efficiency and sustainability every step of the
                      <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                      <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                      way.
                  </Text>
              </Box>
    
              <Box 
                background="#D0EFCC" 
                width={["100%", "100%", "50%"]} 
                borderRadius={["15px", "20px", "25px"]} 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center" 
                padding={["1.5rem", "1.75rem", "2rem"]}>
                  <Image src="/images/i13.png" alt="i13" width={["70%", "65%", "60%"]} height="auto" marginBottom="1.5rem"/>
      
                  <Text 
                    fontFamily="Poppins" 
                    fontWeight="500" 
                    fontSize={["24px", "28px", "30px"]} 
                    lineHeight="100%" 
                    letterSpacing="0%" 
                    marginBottom="10px"
                    textAlign={["center", "center", "left"]}>
                      Making a Difference Together
                  </Text>
      
                  <Text 
                    fontFamily="Poppins" 
                    fontSize={["14px", "15px", "16px"]} 
                    lineHeight={["160%", "140%", "100%"]}
                    textAlign={["center", "center", "left"]}
                    px={[2, 2, 0]}>
                      Do you know? By switching to solar energy, you can
                      <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                      <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                      reduce greenhouse gas emissions by up to 80%
                      <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                      <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                      compared to traditional energy sources. FuelFinder is
                      <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                      <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                      proud to partner with individuals and businesses
                      <Box as="span" display={["none", "none", "inline"]}><br /></Box>
                      <Box as="span" display={["inline", "inline", "none"]}>{" "}</Box>
                      committed to sustainability.
                  </Text>
              </Box>
            </Flex>
          </Flex>
        </Center>
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
          <Button background = "orange.200" borderRadius = "50px" width = "70px" height = "70px" display = "flex" alignItems = "center" justifyContent = "center" padding = "0" position = "relative" top = "-190px" onClick={handleNavigate}>
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
            top={["-120px", "-150px", "-190px"]} 
            onClick={handleNavigate}>
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
                <Box flex={1} marginLeft={["5px", "7px", "10px"]} mb={["20px", "20px", "0"]} >
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


   
    

      <Box display = "flex" justifyContent = "center" marginTop = "50px">
        <Image src = "/images/frame 8.png" alt = "Frame 8" width = "95%" maxHeight = "900px" height = "auto" mb = "12" />
      </Box>


    

      {/* <Box background = "#003399" marginLeft="50px" width="93%" height="100%" borderRadius="25px" padding="40px" position="relative" overflow="hidden" marginBottom = "50px">
        <Box width="100%" display="flex" justifyContent="flex-start" marginBottom="30px" marginTop="-10px">
            <Image src="/images/i10.png" alt="i10" width="40px" height="auto" />
          </Box>

          <Text fontFamily="Poppins" fontWeight="500" fontSize="50px" lineHeight="59px" letterSpacing="0%" color = "white">
            <Text as = "span" color = "yellow.500">Trusted by </Text>Movers, <br />
              Shakers,
            <Text as = "span" color = "yellow.500"> and </Text> <br />
              Planet Savers!
          </Text>


          <Box position="absolute" top = "-40px" right="10px" width="100%" height="auto">
            <Image src="/images/i17.png" alt="i17" width="100%" height="auto" />
          </Box>


          <Box position="absolute" top = "-40px" right="10px" width="100%" height="auto" >
            <Image src="/images/i18.png" alt="i18" width="100%" height="auto" zIndex = {1} opacity={0.15}/>
          </Box>
      </Box> */}





      <Box 
        background="#003399" 
        marginLeft={{ base: "10px", sm: "20px", md: "50px" }} 
        width={{ base: "95%", md: "93%" }} 
        height="100%" 
        borderRadius="25px" 
        padding={{ base: "20px", sm: "30px", md: "40px" }} 
        position="relative" 
        overflow="hidden" 
        marginBottom="50px">
 
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
  );
}
