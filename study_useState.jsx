import { Button, Box } from '@primer/react';
// regionOprtion의 초기값은 네 개 모두 -> 초기값을 array를 map으로 넘겨 줄 것
const [regionOption, setRegionOption] = useState(['zeze', 'inhae', 'goda', 'samsu']);
const [isAlphaSelected, setAlphaSelected] = useState(false);

// 알파가 클릭됐을 때 이 함수가 호출
function onAlphaSelected() {
  setRegionOption(['zeze', 'inhae']);
  setAlphaSelected(true);
}

<Box>
  {/* 버튼 누를 때  마다 렌더링 */}
  <Button onClick={onAlphaSelected}> 렌더링 버튼 </Button>
</Box>
