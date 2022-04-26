interface LoginInfo {
  username: string;
  password: string;
}

interface OrderList {
  page?: number;
  size?: number;
}

interface OrderItem {
  user_id: string;
  username: string;
  food: string;
  massage: string;
  address: string;
  price: number;
  createTime: string;
}

interface PeopleList {
  page?: number;
  size?: number;
}

interface PeopleItem {
  user_id: string;
  username: string;
  phonenum: string;
  mailbox: string;
  address: string;
  createTime: string;
}

interface AuditInfo {
  saleId: string;
  publish: string;
}

interface CommentList {
  page?: number;
  size?: number;
}

interface CommentItem {
  content: string;
  username: string;
  score: number;
  food_name: string;
  business_name: string;
  createTime: string;
}

export {
  LoginInfo,
  OrderList,
  OrderItem,
  PeopleList,
  PeopleItem,
  AuditInfo,
  CommentList,
  CommentItem,
};
