import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
  Input,
  Button,
  Text,
  Modal,
  Select,
  TextArea,
  CheckIcon,
} from 'native-base';
import CreateAndEditTopBar from '../CreateAndEditTopBar';
import { useMutation } from 'react-query';
import {
  fetchDeleteBudgetItem,
  fetchUpdateBudgetItem,
} from '../../api/expenditure';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';

const budgetCategoryMap = new Map([
  [1, '攝影'],
  [2, '婚前中式禮儀'],
  [3, '派帖'],
  [4, '美容'],
  [5, '早上敬茶、出門入門'],
  [6, '証婚'],
  [7, '晚上婚宴'],
  [8, '婚禮服飾'],
  [9, '婚禮當日化妝'],
  [10, '交通'],
  [11, '回門'],
  [12, '其他'],
]);

export function EditBudgetItem({ route, navigation }: any) {
  const eventId = useSelector((state: IRootState) => state.event.event?.id);
  const [categoryId, setCategoryId] = useState(route.params.categoryId);
  const [description, setDescription] = useState(route.params.description);
  const [expenditure, setExpenditure] = useState(route.params.expenditure);
  const [id, setId] = useState(route.params.id);
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      categoryId: categoryId,
      expenditure: JSON.stringify(expenditure),
      description: JSON.stringify(route.params.description).replace(/\"/g, ''),
    },
  });

  const updateBudgetItemMutation: any = useMutation(fetchUpdateBudgetItem);
  const deleteBudgetItemMutation: any = useMutation(fetchDeleteBudgetItem);

  const onSubmit = (data: any) => {
    data.expenditure = parseInt(data.expenditure);
    data.categoryId = parseInt(data.categoryId);
    data.id = id;
    data.wedding_event_id = eventId;
    console.log('submit form data:', data);
    updateBudgetItemMutation.mutate(data);
  };

  const deleteBudgetItem = () => {
    deleteBudgetItemMutation.mutate(id);
  };

  return (
    <CreateAndEditTopBar pageName="編輯支出">
      <View>
        {/* <Select
          defaultValue={String(categoryId)}
          selectedValue={String(categoryId)}
          placeholder="請選擇種類"
          minWidth="200"
          marginTop={5}
          accessibilityLabel="請選擇種類"
          placeholderTextColor="gray.700"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => {
            console.log(itemValue);
            setCategoryId(parseInt(itemValue));
          }}
        >
          <Select.Item label="攝影" value="1" />
          <Select.Item label="婚前中式禮儀" value="2" />
          <Select.Item label="派帖" value="3" />
          <Select.Item label="美容" value="4" />
          <Select.Item label="早上敬茶、出門入門" value="5" />
          <Select.Item label="証婚" value="6" />
          <Select.Item label="晚上婚宴" value="7" />
          <Select.Item label="婚禮服飾" value="8" />
          <Select.Item label="婚禮當日化妝" value="9" />
          <Select.Item label="交通" value="10" />
          <Select.Item label="回門" value="11" />
          <Select.Item label="其他" value="12" />
        </Select> */}

        <Controller
          name="categoryId"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange } }) => (
            <>
              <Select
                defaultValue={String(categoryId)}
                minWidth="200"
                accessibilityLabel="請選擇種類"
                placeholder="請選擇種類"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                fontSize="md"
                onValueChange={onChange}
              >
                <Select.Item label="攝影" value="1" />
                <Select.Item label="婚前中式禮儀" value="2" />
                <Select.Item label="派帖" value="3" />
                <Select.Item label="美容" value="4" />
                <Select.Item label="早上敬茶、出門入門" value="5" />
                <Select.Item label="証婚" value="6" />
                <Select.Item label="晚上婚宴" value="7" />
                <Select.Item label="婚禮服飾" value="8" />
                <Select.Item label="婚禮當日化妝" value="9" />
                <Select.Item label="交通" value="10" />
                <Select.Item label="回門" value="11" />
                <Select.Item label="其他" value="12" />
              </Select>
            </>
          )}
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextArea
              marginTop={5}
              placeholder="事項"
              style={editBudgetStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="description"
        />
        {errors.description && <Text color="danger.500">請填寫事項。</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              marginTop={5}
              placeholder="金額"
              style={editBudgetStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="expenditure"
        />
        {errors.expenditure && <Text color="danger.500">請填寫金額。</Text>}

        <View style={editBudgetStyles.buttonRow}>
          <Button marginTop={20} onPress={handleSubmit(onSubmit)}>
            提交
          </Button>
          <Button
            colorScheme="danger"
            marginTop={20}
            onPress={() => setShowModal(true)}
          >
            移除支出
          </Button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.Header>確定移除支出？</Modal.Header>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    取消
                  </Button>
                  <Button
                    colorScheme="danger"
                    onPress={() => {
                      deleteBudgetItem();
                      setShowModal(false);
                    }}
                  >
                    確定
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </View>

        <View>
          {updateBudgetItemMutation.isError ? (
            <Text color="danger.500">
              {updateBudgetItemMutation.error.message}
            </Text>
          ) : null}

          {updateBudgetItemMutation.isSuccess
            ? navigation.navigate('TabScreen', { screen: 'BudgetScreen' })
            : null}
        </View>

        <View>
          {deleteBudgetItemMutation.isError ? (
            <Text color="danger.500">
              {deleteBudgetItemMutation.error.message}
            </Text>
          ) : null}

          {deleteBudgetItemMutation.isSuccess
            ? navigation.navigate('TabScreen', { screen: 'BudgetScreen' })
            : null}
        </View>
      </View>
    </CreateAndEditTopBar>
  );
}

const editBudgetStyles = StyleSheet.create({
  input: {
    borderWidth: 2,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
