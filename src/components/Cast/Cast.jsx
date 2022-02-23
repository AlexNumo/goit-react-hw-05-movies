import styled from 'styled-components';

const CastStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CastList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const CastCard = styled.li`
  margin: 5px 5px 5px 5px;
  list-style-type: none;
  border: solid 1px;
  width: 300px;
  height: 540px;
`

const CastCardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Cast = ({items}) => {
  return (
    <CastStyle>
      {items && (
        <div>
          {items.length > 0 && (
            <CastList>
              {items.map(item => {
                return <CastCard key={item.id}>
                  <div>
                    {item.profile_path && (
                      <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt={item.name}/>)
                    }
                    <CastCardInfo>
                      <p>Name: {item.name}</p>
                      <p>Character: {item.character}</p>
                    </CastCardInfo>
                  </div>
                </CastCard>
                }
              )}
            </CastList>
          )}
        </div>
      )}
    </CastStyle>


  );
};

  