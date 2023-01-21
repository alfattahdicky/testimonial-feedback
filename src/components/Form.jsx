import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { uploadImage, writeData } from "../data/firebase";
import ButtonForm from "./core/ButtonForm";
import Category from "./features/Category";
import Feedback from "./features/Feedback";
import HeaderForm from "./core/HeaderForm";
import ImageUpload from "./core/ImageUpload";
import InputName from "./core/InputName";
import Rating from "./features/Rating";
import useUrlImage from "../hooks/useUrlImage";
import Alert from "./core/Alert";
import ThankYou from "../pages/ThankYou";
import { uid } from "uid"
import useFormStore from "../store/formStore";

//* completed useForm
const Form = () => {
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();
  const toast = useToast();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { dirtyFields, errors },
  } = useForm({
    defaultValues: {
      id: uid(6),
      name: "",
      profession: "",
      category: "",
      image: "",
      uploadImage: false,
      rating: "",
      feedback: "",
    },
  });
  const cancelRef = useRef();
  const [categoryState, setCategoryState] = useState("");
  const [indexStar, setIndexStar] = useState();
  const [image, setImage] = useState("");
  const updateSubmitted = useFormStore((state) => state.updateSubmitted);
  const [stateUpload, setStateUpload] = useState(false);
  const [url, error] = useUrlImage(getValues("uploadImage"), getValues("name"));


  useEffect(() => {
    if (url !== "") {
      setValue("image", url);
    }

    if (error) {
      toast({
        title: error,
        status: "error",
        duration: 1000,
        position: "top-right",
      });
    }
  }, [url]);

  //* Finish Input Category
  const handleChoose = (category) => {
    setCategoryState(category);
    setValue("category", category);
  };

  //* Finish Update Image
  const handleUpdateImage = () => {
    setValue("uploadImage", false);
    onCloseAlert();
  };

  //* Completed Image Upload
  const handleInputImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      setImage(event.target.result);
    });
    if (image !== "") {
      onOpenAlert();
    }
    reader.readAsDataURL(file);
  };

  //* Handle Upload Image
  const handleUploadImage = () => {
    const conditionImage = !getValues("uploadImage") && dirtyFields.name;
    const name = getValues("name").split(" ")[0];

    if (conditionImage) {
      setStateUpload(true);
      uploadImage(name, image)
        .then((snapshot) => {
          // console.log(snapshot);
          setValue("uploadImage", true);
          toast({
            title: "Upload Image Success",
            status: "success",
            duration: 5000,
            position: "top-right",
          });
          setStateUpload(false);
        })
        .catch((err) => {
          toast({
            title: "Upload Image Failed",
            status: "error",
            duration: 1000,
            position: "top-right",
          });
        });
    } else {
      toast({
        title: "Please fill your name",
        status: "error",
        duration: 1000,
        position: "top-right",
      });
    }
  };

  //* Finish Rating
  const ratingChange = (rating) => {
    setIndexStar(rating);
    setValue("rating", rating);
  };

  //TODO: Submit Form
  const handleSubmitForm = (data) => {
    const name = getValues('name').split(' ')[0].toLowerCase();
    if (data.rating === "" ) {
      toast({
        title: "Give a Rating 1 - 5",
        status: "error",
        duration: 2000,
        position: "top-right",
      });
    } else if(data.image === "") {
      toast({
        title: "Place Your Image",
        status: "error",
        duration: 2000,
        position: "top-right",
      });
    }

    writeData(data, name).then(() => {
      localStorage.setItem('submit', true);
      updateSubmitted();
    }).catch((err) => {
      toast({
        title: "Cannot Submit Data",
        status: "error",
        duration: 2000,
        position: "top-right",
      })
    })
  };

  return (
    <Stack
      ml={{ base: "1.2rem", md: "2.5rem" }}
      pr={{ base: "2rem" }}
      paddingTop={{ base: "1rem", md: "2rem" }}
      paddingBottom={{ base: "2rem", md: "2rem" }}
      width='100%'
      height='100vh'
      overflowY='scroll'
    >
      <HeaderForm />
      <FormControl as='form' onSubmit={handleSubmit(handleSubmitForm)}>
        <InputName
          title='Name'
          placeholder='Ex: Fred'
          {...register("name", { required: true })}
        />
        <InputName
          title='Profession'
          placeholder='Ex: Engineer at Tokopedia'
          {...register("profession", { required: true })}
        />
        <Category categoryState={categoryState} handleChoose={handleChoose} />
        <ImageUpload
          image={image}
          handleInputImage={(event) => handleInputImage(event)}
          handleUpload={handleUploadImage}
          stateUpload={stateUpload}
        />
        <Rating indexStar={indexStar} ratingChange={ratingChange} />
        <Feedback {...register("feedback", { required: true })} />
        <ButtonForm
          type='submit'
          mt='1.2rem'
          text='Submit'
        />
      </FormControl>
      <Alert
        cancelRef={cancelRef}
        onClose={onCloseAlert}
        isOpen={isOpenAlert}
        handleUpdateImage={handleUpdateImage}
      />
    </Stack>
  );
};

export default Form;
