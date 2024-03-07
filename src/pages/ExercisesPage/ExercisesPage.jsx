// import { Suspense, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
// import sprite from '../../assets/sprite.svg';
// import { getError, getIsLoading } from '../../redux/exercises/categoriesSlice';
// import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories.styled';
// import { fetchExercisesCategories } from '../../redux/exercises/operations';
// import { Container } from '../../styles/GlobalStyles';
// import {
//   ContainerExPage,
//   BackButton,
//   BackGroundStyle,
//   MixContainer,
// } from './ExercisesPage.styled';
// import { TitlePage } from '../../components/TitlePage';
// import { Loader } from '../../components/Loader';
// import { toast } from 'react-toastify';

// const ExercisesPage = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);
//   const { filter, filterList } = useParams();
// const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const gettingExercisesFilters = async () => {
//       if (filter === undefined) {
//         {
//           toast.info('We are still awating for data', {
//             theme: 'dark',
//           });
//         }
//       } else {
//         dispatch(fetchExercisesCategories({ filter: filter }));
//       }
//     };
//     gettingExercisesFilters();
//   }, [dispatch, filter]);
//   return (
// <BackGroundStyle>
//       <Container>
//         <MixContainer>
//           {isLoading ? (
//             <Loader />
//           ) : (
//             <div>
//               {filter !== undefined &&
//               location.pathname.endsWith(filter.replace(' ', '%20')) ? null : (
// {
//   <BackButton onClick={() => navigate(-1)}>
//   <svg style={{ fill: 'none' }}>
//     <use href={sprite + '#icon-arrow-left'} />
//   </svg>
//   Back{' '}
// </BackButton>;
// }
//               )}
//               <ContainerExPage>
//                 <TitlePage
//                   title={filterList ? filterList.split(' ')[0] : 'Exercises'}
//                 />
//                 <ExercisesCategories />
//               </ContainerExPage>

//               {isLoading && !error && <Loader />}
//               <>
//                 <Suspense>
//                   <Outlet />
//                 </Suspense>
//               </>
//             </div>
//           )}
//         </MixContainer>
//       </Container>
//     </BackGroundStyle>
//   );
// };

// export default ExercisesPage;

import { useState, Suspense } from 'react';
import {
  Outlet,
  // useNavigate
} from 'react-router-dom';
import { SectionTemplate } from '../../components/SectionTemplate';
import { TitlePage } from '../../components/TitlePage';
import { ChapterTemplate } from '../../components/ChapterTemplate';
import { AddExerciseSuccess } from '../../components/AddExerciseSuccess';
import { BasicModalWindow } from '../../components/BasicModalWindow';
import {
  ChaptersWrapper,
  LinkStyled,
  DesctopWrapper,
  BackGroundStyle,
  // BackButton,
} from './ExercisesPage.styled';

// import sprite from '../../assets/sprite.svg';

const ExercisesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <BackGroundStyle>
      <SectionTemplate>
        {/* <BackButton onClick={() => navigate(-1)}>
          <svg style={{ fill: 'none' }}>
            <use href={sprite + '#icon-arrow-left'} />
          </svg>
          Back{' '}
        </BackButton> */}
        <DesctopWrapper>
          <TitlePage>Exercises</TitlePage>
          <ChaptersWrapper>
            <li>
              <LinkStyled to="body parts">
                <ChapterTemplate>Body parts</ChapterTemplate>
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="muscles">
                <ChapterTemplate>Muscles</ChapterTemplate>
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="equipment">
                <ChapterTemplate>Equipment</ChapterTemplate>
              </LinkStyled>
            </li>
          </ChaptersWrapper>
        </DesctopWrapper>
        <Suspense fallback={<p>Loader</p>}>
          {isModalOpen && (
            <BasicModalWindow onClick={toggleModal}>
              <AddExerciseSuccess onClick={toggleModal} />
            </BasicModalWindow>
          )}
          <Outlet />
        </Suspense>
      </SectionTemplate>
    </BackGroundStyle>
  );
};

export default ExercisesPage;
