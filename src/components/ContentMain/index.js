import React from "react";
import useStyles from "./indexStyles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import s1 from "../../assets/images/1.png";
import s2 from "../../assets/images/2.png";
import s3 from "../../assets/images/3.png";
import s4 from "../../assets/images/4.png";
import s5 from "../../assets/images/5.png";
import s6 from "../../assets/images/6.png";

import Item from "./Item";
function Index() {
  const classes = useStyles();
  const data = [
    {
      id: 1,
      image: s1,
      title: "ساعت هوشمند اپل واچ 3 مدل 38mm Gold Aluminum Band",
      price: "2,80,000",
    },
    {
      id: 2,
      image: s2,
      title: "ساعت هوشمند سامسونگ مدل Gear S3 Frontier SM-R760",
      price: "2,80,000",
    },
    {
      id: 3,
      image: s3,
      title:
        "شارژر همراه شیاومی مدل Mi Power Bank 2 با ظرفیت 10000 میلی آمپر ساعت  ",
      price: "2,80,000",
    },
    {
      id: 4,
      image: s4,
      title: "    گوشی موبایل موتورولا مدل Moto Z2 Force XT1789-06     ",
      price: "2,80,000",
    },
    {
      id: 5,
      image: s5,
      title: "    لپ تاپ 15 اینچی ایسر مدل Predator 15 G9-593-76KB     ",
      price: "2,80,000",
    },
    {
      id: 6,
      image: s6,
      title: "    لپ تاپ 13 اینچی اپل مدل MacBook Air MQD32 2017     ",
      price: "2,80,000",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.divOrdering}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              مرتب سازی بر اساس
            </InputLabel>
            <NativeSelect
              defaultValue={3}
              //   inputProps={{
              //     name: "age",
              //     id: "uncontrolled-native",
              //   }}
            >
              <option value={1}>مرتبط ترین</option>
              <option value={2}>جدیدترین</option>
              <option value={3}>پرفروش ترین</option>
              <option value={4}>کمترین قیمت</option>
              <option value={5}>بیشترین قیمت</option>
              <option value={6}>نام ،الف تا ی</option>
              <option value={7}>نام ی تا الف</option>
              <option value={5}>بیشترین تخفیف</option>
              <option value={5}> پر بیننده ترین</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </div>
      <div className={classes.divItem}>
        {data.map((item) => (
          <Item
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className={classes.pagination}>
        <Stack  spacing={2}>
          <Pagination  size="small" color="secondary" count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
}

export default Index;
