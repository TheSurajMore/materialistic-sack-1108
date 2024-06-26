import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, Button,} from '@chakra-ui/react';

const buy = () => {
  alert(
 "Order Placed Successfully 🛒 Thank you for Shopping !"
 )
}

//   const IMAGE =
//     'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

  export default function Product(props) {
    const {title, rating_rate, rating_count, price, description, category, image } = props
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {category}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
               {title}
            </Heading>
            <Text fontWeight={800} fontSize={'xl'}>
                ${price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $1999
              </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             Rating: {rating_rate}({rating_count})
            </Heading>
            <Stack direction='row' spacing={4}>
              <Button colorScheme='pink' variant='solid' onClick={buy}> Buy Now </Button>
              {/* <Button colorScheme='blue' variant='outline'>Add to Cart</Button> */}
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {description}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }