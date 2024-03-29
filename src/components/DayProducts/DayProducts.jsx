import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import sprite from '../../assets/sprite.svg';

import {
  TableWrapper,
  NavText,
  Nothing,
  TitleNav,
  TitleText,
  NavBlock,
  Table,
  HeaderArray,
  HeaderItem,
  ProductListArray,
  ProductListArrayItem,
  WrapperForItemsArray,
  TypeRecommendSpan,
  SvgTableStyled,
  TableDeleteButton,
  ProductListArrayItemMobile,
  MobileItemsHolder1,
  MobileItemsHolder2,
  MobileItemsHolder3,
  MobileItemsHolder4,
  ListMobileArray,
} from './DayProducts.styled';
import { globalColor } from '../../styles/root';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDiaryProducts } from '../../redux/diary/operations';
import { toast } from 'react-toastify';
import {
  selectDiaryError,
  selectDiaryInformation,
  selectIsLoadingProducts,
} from '../../redux/diary/selectors';
import { selectUser } from '../../redux/auth/selectors';
import { formatDateForDiary } from '../../helpers/formatDateForDiary';
import { PulseEffect } from '../PulseEffect/PulseEffect';

const DayProducts = ({ currentDate }) => {
  const productArr = useSelector(selectDiaryInformation);

  const products = productArr[0]?.productArr;

  const isLoadingProducts = useSelector(selectIsLoadingProducts);

  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const userBloodType = currentUser?.blood;

  const error = useSelector(selectDiaryError);

  const isMobile = useMediaQuery('(max-width:768px)');

  const handleDelete = async (id) => {
    const formatedDate = formatDateForDiary(currentDate);
    try {
      await dispatch(
        deleteDiaryProducts({ productId: id, selectedDate: formatedDate })
      );
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
    }
  };

  return (
    <TableWrapper>
      <TitleNav>
        <TitleText>Products</TitleText>
        <NavBlock>
          <NavLink
            to="/products"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavText>Add product</NavText>
            <svg
              style={{
                width: '16px',
                height: '16px',
                marginLeft: '8px',
                stroke: globalColor.colorOrange,
              }}
            >
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </NavLink>
        </NavBlock>
      </TitleNav>
      {products && products.length > 0 && !error ? (
        isMobile ? (
          <Table>
            {isLoadingProducts ? (
              <PulseEffect />
            ) : (
              <>
                <WrapperForItemsArray>
                  {products?.map((product) => {
                    const productTitle = product?.title;
                    const calories = product?.calories;
                    const amount = product?.amount;
                    const productId = product?._id;
                    const bloodType = product?.productId?.groupBloodNotAllowed;
                    const productCategory = product?.category;
                    const type =
                      bloodType && bloodType[userBloodType] ? 'Yes' : 'No';

                    return (
                      <ProductListArray key={productId}>
                        <ProductListArrayItemMobile>
                          Title
                        </ProductListArrayItemMobile>
                        <ProductListArrayItemMobile>
                          {productTitle}
                        </ProductListArrayItemMobile>
                        <ProductListArrayItemMobile>
                          Category
                        </ProductListArrayItemMobile>
                        <ProductListArrayItemMobile>
                          {productCategory}
                        </ProductListArrayItemMobile>
                        <ListMobileArray>
                          <MobileItemsHolder1
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <ProductListArrayItemMobile>
                              Calories
                            </ProductListArrayItemMobile>
                            <ProductListArrayItemMobile>
                              {calories}
                            </ProductListArrayItemMobile>
                          </MobileItemsHolder1>
                          <MobileItemsHolder2
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <ProductListArrayItemMobile>
                              Weight
                            </ProductListArrayItemMobile>
                            <ProductListArrayItemMobile>
                              {amount}
                            </ProductListArrayItemMobile>
                          </MobileItemsHolder2>
                          <MobileItemsHolder3
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <ProductListArrayItemMobile>
                              Recommend
                            </ProductListArrayItemMobile>
                            <ProductListArrayItemMobile>
                              <div
                                style={{
                                  display: 'flex',
                                  gap: '8px',
                                  alignItems: 'center',
                                  height: '24px',
                                }}
                              >
                                <svg
                                  style={{
                                    width: '14px',
                                    height: '14px',
                                  }}
                                >
                                  {type === 'Yes' ? (
                                    <use
                                      href={sprite + '#icon-Ellipse-82'}
                                      style={{
                                        fill: globalColor.colorSecondaryGreen,
                                        stroke: globalColor.colorSecondaryGreen,
                                      }}
                                    />
                                  ) : (
                                    <use
                                      href={sprite + '#icon-Ellipse-82'}
                                      style={{
                                        fill: globalColor.colorSecondaryRed,
                                        stroke: globalColor.colorSecondaryRed,
                                      }}
                                    />
                                  )}
                                </svg>
                                <TypeRecommendSpan>{type}</TypeRecommendSpan>
                              </div>
                            </ProductListArrayItemMobile>
                          </MobileItemsHolder3>
                          <MobileItemsHolder4
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <ProductListArrayItemMobile>
                              {''}
                            </ProductListArrayItemMobile>
                            <ProductListArrayItemMobile>
                              <TableDeleteButton
                                type="button"
                                onClick={() => handleDelete(productId)}
                              >
                                <SvgTableStyled>
                                  <use href={sprite + '#icon-trash-03'}></use>
                                </SvgTableStyled>
                              </TableDeleteButton>
                            </ProductListArrayItemMobile>
                          </MobileItemsHolder4>
                        </ListMobileArray>
                      </ProductListArray>
                    );
                  })}
                </WrapperForItemsArray>
              </>
            )}
          </Table>
        ) : (
          <Table>
            {isLoadingProducts ? (
              <PulseEffect />
            ) : (
              <>
                <HeaderArray>
                  <HeaderItem>Title</HeaderItem>
                  <HeaderItem>Category</HeaderItem>
                  <HeaderItem>Calories</HeaderItem>
                  <HeaderItem>Weight</HeaderItem>
                  <HeaderItem>Recommend</HeaderItem>
                  <HeaderItem>{''}</HeaderItem>
                </HeaderArray>

                <WrapperForItemsArray>
                  {products?.map((product) => {
                    const productTitle = product?.title;
                    const calories = product?.calories;
                    const amount = product?.amount;
                    const productId = product?._id;
                    const bloodType = product?.productId.groupBloodNotAllowed;
                    const productCategory = product?.category;
                    const type =
                      bloodType && bloodType[userBloodType] ? 'Yes' : 'No';
                    return (
                      <ProductListArray key={productId}>
                        <ProductListArrayItem>
                          {productTitle}
                        </ProductListArrayItem>
                        <ProductListArrayItem>
                          {productCategory}
                        </ProductListArrayItem>
                        <ProductListArrayItem>{calories}</ProductListArrayItem>
                        <ProductListArrayItem>{amount}</ProductListArrayItem>
                        <ProductListArrayItem>
                          <div
                            style={{
                              display: 'flex',
                              gap: '8px',
                              alignItems: 'center',
                              height: '24px',
                            }}
                          >
                            <svg
                              style={{
                                width: '14px',
                                height: '14px',
                              }}
                            >
                              {type === 'Yes' ? (
                                <use
                                  href={sprite + '#icon-Ellipse-82'}
                                  style={{
                                    fill: globalColor.colorSecondaryGreen,
                                    stroke: globalColor.colorSecondaryGreen,
                                  }}
                                />
                              ) : (
                                <use
                                  href={sprite + '#icon-Ellipse-82'}
                                  style={{
                                    fill: globalColor.colorSecondaryRed,
                                    stroke: globalColor.colorSecondaryRed,
                                  }}
                                />
                              )}
                            </svg>
                            <TypeRecommendSpan>{type}</TypeRecommendSpan>
                          </div>
                        </ProductListArrayItem>
                        <ProductListArrayItem>
                          <TableDeleteButton
                            type="button"
                            onClick={() => handleDelete(productId)}
                          >
                            <SvgTableStyled>
                              <use href={sprite + '#icon-trash-03'}></use>
                            </SvgTableStyled>
                          </TableDeleteButton>
                        </ProductListArrayItem>
                      </ProductListArray>
                    );
                  })}
                </WrapperForItemsArray>
              </>
            )}
          </Table>
        )
      ) : (
        <Nothing>Not found products</Nothing>
      )}
    </TableWrapper>
  );
};

export default DayProducts;
