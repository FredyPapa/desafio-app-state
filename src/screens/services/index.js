import React, {useEffect} from "react";
import { View, FlatList } from "react-native";
import { ServiceItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {filteredServices, selectService} from "../../store/actions/services.action";
import { styles } from "./styles";

const ServicesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const filterServices = useSelector((state)=>state.service.filteredServices);
  const category = useSelector((state)=>state.category.selected);
  
  useEffect(()=>{
    dispatch(filteredServices(category.id));
  },[]);

  const onSelected = (item) => {
    dispatch(selectService(item.id));
    navigation.navigate("ServiceDetails", {
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <ServiceItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filterServices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ServicesScreen;
