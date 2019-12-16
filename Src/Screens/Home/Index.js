import React, { Component } from "react";
import { StatusBar, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Footer,
  FooterTab,
  Item,
  Input
} from "native-base";
import { Actions } from "react-native-router-flux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";
import Icon from "react-native-vector-icons/FontAwesome5";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      search: "",
      isLoading: true
    };
  }

  getData() {
    Axios({
      method: "get",
      url: "http://192.168.1.8:3014/engineer"
    }).then(res => {
      let result = res.data.result;
      this.setState({ items: result, isLoading: false });
    });
  }

  componentDidMount() {
    this.getData();
  }

  searchEng = async () => {
    try {
      const search = this.state.search;
      console.log(search);

      const result = await Axios.get(
        `http://192.168.1.8:3014/engineer/search/skill?skill_name=${search}`
      );
      console.log(result.data.result);
      this.setState({ items: result.data.result, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  details() {
    Actions.details();
  }
  home() {
    Actions.home();
  }
  profile() {
    Actions.profile();
  }
  project() {
    Actions.project();
  }
  render() {
    const { items } = this.state;

    return (
      <Container style={{ backgroundColor: "#e7ebea" }}>
        <Header style={{ backgroundColor: "#133A30" }} searchBar>
          <StatusBar backgroundColor="#0f2e26" barStyle="'dark-content'" />
          <Item>
            <Input
              placeholder="Search"
              onChangeText={value =>
                this.setState({ search: value.toLowerCase() })
              }
            />
            <Icon
              name="search"
              size={20}
              style={{ marginRight: 10 }}
              onPress={() => this.searchEng()}
            />
          </Item>
        </Header>

        <Content>
          <FlatGrid
            itemDimension={130}
            items={items.reverse()}
            style={styles.gridView}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                  Actions.details({ id_eng: item.id_eng });
                }}
              >
                <Image
                  source={{ uri: item.eng_image }}
                  style={{ flex: 1, borderRadius: 5 }}
                />
                <Text style={styles.itemName}>{item.eng_name}</Text>
                <Text style={styles.itemCode}>{item.eng_desc}</Text>
              </TouchableOpacity>
            )}
          />
        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: "#133A30" }}>
            <Button
              vertical
              active
              style={{ backgroundColor: "#267460" }}
              onPress={this.home}
            >
              <Icon name="home" size={30} color={"#ffffff"} />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={this.profile}>
              <Icon name="user" size={30} color={"#ffffff"} />
              <Text>Profile</Text>
            </Button>
            <Button vertical onPress={this.project}>
              <Icon name="file" size={30} color={"#ffffff"} />
              <Text>Project</Text>
            </Button>
            {/* <Button vertical>
              <Icon name="cogs" size={30} color={'#ffffff'} />
              <Text>Setting</Text>
            </Button> */}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 0,
    flex: 1
  },
  itemContainer: {
    backgroundColor: "white",
    justifyContent: "flex-start",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e7ebea",
    padding: 0,
    height: 300
  },
  itemName: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
    textAlign: "center"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "black",
    textAlign: "center"
  }
});
export default Home;
